/* iTaukei PWA Service Worker

Strategy:
index.html + data.js: NETWORK-FIRST, falling back to cache.
Users always get the newest content when online, and the app still
works offline because both files are ALSO pre-cached at install.
everything else (icons, manifest): cache-first.
Because index.html and data.js are network-first, a content-only change
reaches users without bumping APP_VERSION. Bump it anyway when you change
THIS file or the asset list, so the old cache is cleared.
*/
const APP_VERSION = 'v4';
const CACHE_NAME = 'taukei-fijian-app-' + APP_VERSION;

// Resolve against the SW's own scope so this works at "/" and at
// "/taukei-fijian-app/" without any hardcoded deployment path.
const OFFLINE_URL = new URL('index.html', self.location).href;

const CORE_ASSETS = [
'index.html',
'data.js',
'manifest.json',
'icons/icon-192.png',
'icons/icon-512.png',
'icons/apple-touch-icon.png'
];

// NOTE: compare against RESOLVED pathnames. A bare 'index.html' will never
// equal url.pathname, which is always absolute ('/index.html').
const DYNAMIC_PATHS = ['index.html', 'data.js']
.map(p => new URL(p, self.location).pathname);

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(CORE_ASSETS))
.then(() => self.skipWaiting())
);
});

self.addEventListener('activate', event => {
event.waitUntil(
caches.keys()
.then(names => Promise.all(names.map(n => n !== CACHE_NAME ? caches.delete(n) : null)))
.then(() => self.clients.claim())
);
});

self.addEventListener('fetch', event => {
if (event.request.method !== 'GET') return;

const url = new URL(event.request.url);
if (url.origin !== self.location.origin) return; // let Firebase etc. through

const isNavigation = event.request.mode === 'navigate';
const isDynamic = isNavigation || DYNAMIC_PATHS.includes(url.pathname);

if (isDynamic) {
event.respondWith(
fetch(event.request)
.then(response => {
if (response && response.status === 200 && response.type === 'basic') {
const clone = response.clone();
// A navigation to "/" is stored under the index.html key so the
// offline shell lookup below can always find it.
const key = isNavigation ? OFFLINE_URL : event.request;
caches.open(CACHE_NAME).then(cache => cache.put(key, clone));
}
return response;
})
.catch(async () => {
const cached = await caches.match(event.request);
if (cached) return cached;
const shell = await caches.match(OFFLINE_URL);
if (shell) return shell;
return Response.error();
})
);
return;
}

event.respondWith(
caches.match(event.request).then(cached => {
if (cached) return cached;
return fetch(event.request)
.then(response => {
if (response && response.status === 200 && response.type === 'basic') {
const clone = response.clone();
caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
}
return response;
})
.catch(() => Response.error());
})
);
});