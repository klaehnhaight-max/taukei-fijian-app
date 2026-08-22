/* iTaukei PWA Service Worker
 * Caches core assets for offline use.
 * Firebase Auth/Firestore calls require network and won't work offline,
 * but the core learning app (exercises, progress, localStorage) works offline.
 */

/* BUMP THIS whenever index.html, data.js, or sync.js change.
 * The browser only re-evaluates the service worker when its bytes change,
 * so a content-only update (same script, new HTML/JS) won't reach users
 * until APP_VERSION is bumped — which changes CACHE_NAME, which triggers
 * a new install/activate cycle and clears the old cache. */
const APP_VERSION = 'v2';
const CACHE_NAME = 'taukei-fijian-app-' + APP_VERSION;
const OFFLINE_URL = 'index.html';
const CORE_ASSETS = [
  'index.html',
  'data.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png'
];

// Install: pre-cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache first for core assets, fall back to network
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (Firebase, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // For navigation requests (HTML pages), fall back to index.html for SPA behavior
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }

        // For everything else, go to network
        return fetch(event.request).then(networkResponse => {
          // Cache new requests for future offline use
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // If network fails and it's a navigation, serve the SPA shell
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});
