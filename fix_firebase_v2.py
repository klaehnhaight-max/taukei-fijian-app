#!/usr/bin/env python3
import sys

filepath = '/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html'

with open(filepath, 'r') as f:
    lines = f.readlines()

# Find and fix the sections
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # Fix 1: After function declaration, add offline check and const failed = false
    if 'function loadFirebaseSDK(callback) {' in line:
        new_lines.append(line)
        i += 1
        # Add offline check and failed declaration
        new_lines.append('      // Offline short-circuit: skip Firebase loading if offline\n')
        new_lines.append('      if (!navigator.onLine) {\n')
        new_lines.append('        callback();\n')
        new_lines.append('        return;\n')
        new_lines.append('      }\n')
        new_lines.append('\n')
        new_lines.append('      const failed = false;\n')
        continue
    
    # Fix 2: Remove the old "Always call App.init()" comment and App.init() line
    if '// Always call App.init() first to render the app from cache' in line:
        # Skip this line and the next comment line and App.init() line
        i += 3  # Skip comment, empty line, and App.init()
        continue
    
    # Fix 3: Fix the timeout - add failed = true
    if "console.log('Firebase SDK timeout - proceeding without cloud sync')" in line:
        # Check if next line is "if (!failed) callback();"
        if i + 1 < len(lines) and "if (!failed) callback()" in lines[i+1]:
            new_lines.append("        console.log('Firebase SDK timeout - proceeding without cloud sync');\n")
            new_lines.append('        failed = true;\n')
            new_lines.append('        callback();\n')
            i += 2  # Skip both lines
            continue
    
    # Fix 4: Remove the redundant "let failed = false;" after "let loaded = 0;"
    if 'let loaded = 0;' in line:
        new_lines.append(line)
        i += 1
        if i < len(lines) and 'let failed = false;' in lines[i]:
            i += 1  # Skip the redundant declaration
        continue
    
    # Fix 5: Replace the loadFirebaseSDK call with App.init() followed by it
    if 'loadFirebaseSDK(() => {' in line and 'FirebaseSync.init()' in lines[i+1]:
        new_lines.append('    App.init();\n')
        new_lines.append('    loadFirebaseSDK(() => {\n')
        i += 1
        continue
    
    new_lines.append(line)
    i += 1

with open(filepath, 'w') as f:
    f.writelines(new_lines)

print('File updated successfully')