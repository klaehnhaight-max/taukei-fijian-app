import sys
import re

with open('/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html', 'r') as f:
    content = f.read()

# Use regex to find and replace the loadFirebaseSDK function
pattern = r'''(    function loadFirebaseSDK\(callback\) \{
      // Always call App\.init\(\) first to render the app from cache
      // Firebase SDK loading is background-only and won't affect core functionality
      App\.init\(\);
      
      // Timeout fallback: if Firebase hasn't loaded in 8s, proceed anyway
      const timeout = setTimeout\(\(\) => \{
        console\.log\('Firebase SDK timeout - proceeding without cloud sync'\);
        if \(!failed\) callback\(\);
      \}, 8000\);
      
      const urls = \[
        'https://www\.gstatic\.com/firebasejs/10\.12\.5/firebase-app-compat\.js',
        'https://www\.gstatic\.com/firebasejs/10\.12\.5/firebase-auth-compat\.js',
        'https://www\.gstatic\.com/firebasejs/10\.12\.5/firebase-firestore-compat\.js'
      \];
      let loaded = 0;
      let failed = false;
      urls\.forEach\(src => \{
        const s = document\.createElement\('script'\);
        s\.src = src;
        s\.async = false;
        s\.onload = \(\) => \{
          if \(\+\+loaded === urls\.length && !failed\) \{
            clearTimeout\(timeout\);
            callback\(\);
          \}
        \};
        s\.onerror = \(\) => \{
          if \(!failed\) \{
            failed = true;
            clearTimeout\(timeout\);
            if \(loaded < urls\.length\) callback\(\);
          \}
        \};
        document\.head\.appendChild\(s\);
      \}\);
    \}\n\n    loadFirebaseSDK\(\(\) => \{
      FirebaseSync\.init\(\);
    \}\);)'''

replacement = '''    // Offline short-circuit: skip Firebase loading if offline
    function loadFirebaseSDK(callback) {
      if (!navigator.onLine) {
        callback();
        return;
      }
      
      const failed = false;
      // Timeout fallback: if Firebase hasn't loaded in 8s, proceed anyway
      const timeout = setTimeout(() => {
        console.log('Firebase SDK timeout - proceeding without cloud sync');
        failed = true;
        callback();
      }, 8000);
      
      const urls = [
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js',
        'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js'
      ];
      let loaded = 0;
      urls.forEach(src => {
        const s = document.createElement('script');
        s.src = src;
        s.async = false; // Ensure scripts execute in order (auth-compat depends on app-compat)
        s.onload = () => {
          if (++loaded === urls.length && !failed) {
            clearTimeout(timeout);
            callback();
          }
        };
        s.onerror = () => {
          if (!failed) {
            failed = true;
            clearTimeout(timeout);
            if (loaded < urls.length) callback();
          }
        };
        document.head.appendChild(s);
      });
    }

    App.init();
    loadFirebaseSDK(() => {
      FirebaseSync.init();
    });'''

result = re.sub(pattern, replacement, content)
if result != content:
    with open('/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html', 'w') as f:
        f.write(result)
    print('File updated successfully')
else:
    print('Pattern not found, trying simpler approach...')
    # Fall back to simple find/replace
    old = 'function loadFirebaseSDK(callback) {\n      // Always call App.init() first to render the app from cache\n      // Firebase SDK loading is background-only and won\'t affect core functionality\n      App.init();\n      \n      // Timeout fallback: if Firebase hasn\'t loaded in 8s, proceed anyway\n      const timeout = setTimeout(() => {\n        console.log(\'Firebase SDK timeout - proceeding without cloud sync\');\n        if (!failed) callback();\n      }, 8000);\n      \n      const urls = [\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js\',\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js\',\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js\'\n      ];\n      let loaded = 0;\n      let failed = false;\n      urls.forEach(src => {\n        const s = document.createElement(\'script\');\n        s.src = src;\n        s.async = false; // Ensure scripts execute in order\n        s.onload = () => {\n          if (++loaded === urls.length && !failed) {\n            clearTimeout(timeout);\n            callback();\n          }\n        };\n        s.onerror = () => {\n          if (!failed) {\n            failed = true;\n            clearTimeout(timeout);\n            if (loaded < urls.length) callback();\n          }\n        };\n        document.head.appendChild(s);\n      });\n    }\n\n    loadFirebaseSDK(() => {\n      FirebaseSync.init();\n    });'
    new = '    // Offline short-circuit: skip Firebase loading if offline\n    function loadFirebaseSDK(callback) {\n      if (!navigator.onLine) {\n        callback();\n        return;\n      }\n      \n      const failed = false;\n      // Timeout fallback: if Firebase hasn\'t loaded in 8s, proceed anyway\n      const timeout = setTimeout(() => {\n        console.log(\'Firebase SDK timeout - proceeding without cloud sync\');\n        failed = true;\n        callback();\n      }, 8000);\n      \n      const urls = [\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js\',\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js\',\n        \'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js\'\n      ];\n      let loaded = 0;\n      urls.forEach(src => {\n        const s = document.createElement(\'script\');\n        s.src = src;\n        s.async = false; // Ensure scripts execute in order (auth-compat depends on app-compat)\n        s.onload = () => {\n          if (++loaded === urls.length && !failed) {\n            clearTimeout(timeout);\n            callback();\n          }\n        };\n        s.onerror = () => {\n          if (!failed) {\n            failed = true;\n            clearTimeout(timeout);\n            if (loaded < urls.length) callback();\n          }\n        };\n        document.head.appendChild(s);\n      });\n    }\n\n    App.init();\n    loadFirebaseSDK(() => {\n      FirebaseSync.init();\n    });'
    
    if old in content:
        content = content.replace(old, new)
        with open('/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html', 'w') as f:
            f.write(content)
        print('File updated successfully (simple replace)')
    else:
        print('Both approaches failed - could not find the pattern')