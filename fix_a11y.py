#!/usr/bin/env python3
import re

filepath = '/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html'

with open(filepath, 'r') as f:
    content = f.read()

# Fix 5a: Add permanent live-region after <body> tag
old_body = '''<body>
  <div id="app-container">
    <header>...'''

new_body = '''<body>
  <!-- Permanent aria-live region for screen reader announcements -->
  <div id="live-region" aria-live="polite" aria-atomic="true" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;"></div>
  <div id="app-container">
    <header>...'''

content = content.replace(old_body, new_body)

# Fix 5d: Change home-logo from role="button" to a proper button inside h1
# Original: <h1 id="home-logo" role="button" tabindex="0" aria-label="Go to home screen">
# New: <h1 id="home-logo"><button class="home-btn" aria-label="Go to home screen">
# Wait - need to be careful here. Let me just change the approach
# Actually the simplest fix is to keep the button but wrap text in it, or add a nested button

# Find the exact line and fix it
old_h1 = '''<h1 id="home-logo" role="button" tabindex="0" aria-label="Go to home screen">🌺 iTaukei</h1>'''
new_h1 = '''<h1 id="home-logo">
        <button class="home-btn" type="button" aria-label="Go to home screen">🌺 iTaukei</button>
      </h1>'''

content = content.replace(old_h1, new_h1)

# Update CSS for the new button structure
old_css = '''header h1#home-logo {'''
new_css = '''header h1#home-logo {
      font-size: 1.6rem;'''

content = content.replace(old_css, new_css)

# Update the CSS for the button inside the h1
old_btn_css = '''header h1#home-logo:focus-visible {'''
new_btn_css = '''header h1#home-logo button.home-btn {
      all: unset;
      font-size: inherit;
      font-weight: inherit;
      cursor: pointer;
      padding: 0;
    }

    header h1#home-logo button.home-btn:focus-visible,
    header h1#home-logo button.home-btn:hover {'''

content = content.replace(old_btn_css, new_btn_css)

# Fix 5b: Add aria-pressed to selected left tile in matching
# Find where selectedLeft.classList.add('selected') happens in matching and add aria-pressed
old_selected = '''            selectedLeft = item;
            item.classList.add('selected');'''

new_selected = '''            selectedLeft = item;
            item.classList.add('selected');
            item.setAttribute('aria-pressed', 'true');'''

content = content.replace(old_selected, new_selected)

# Remove aria-pressed when unselecting
old_unselect = '''            selectedLeft.classList.remove('selected');'''
new_unselect = '''            if (selectedLeft) selectedLeft.removeAttribute('aria-pressed');
            selectedLeft.classList.remove('selected');'''

content = content.replace(old_unselect, new_unselect, 1)  # Only replace first occurrence (the one in matching)

# Fix 5e: Add role="alert" to auth error element
old_error = '''        const errorEl = document.createElement('div');
        errorEl.id = 'auth-error';
        errorEl.className = 'auth-error';
        errorEl.style.display = 'none';'''

new_error = '''        const errorEl = document.createElement('div');
        errorEl.id = 'auth-error';
        errorEl.className = 'auth-error';
        errorEl.setAttribute('role', 'alert');
        errorEl.setAttribute('aria-live', 'polite');
        errorEl.style.display = 'none';'''

content = content.replace(old_error, new_error)

# Fix 5c: Add labels and aria-labelledby for auth email and password inputs
# Create labels first, then add aria-labelledby to inputs
old_email_input = '''        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'you@example.com';
        emailInput.id = 'auth-email';'''

new_email_input = '''        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email address';
        emailLabel.setAttribute('for', 'auth-email');
        
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'you@example.com';
        emailInput.id = 'auth-email';
        emailInput.setAttribute('aria-labelledby', 'auth-email-label');
        emailLabel.id = 'auth-email-label';'''

content = content.replace(old_email_input, new_email_input)

old_password_input = '''        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Password';
        passwordInput.id = 'auth-password';'''

new_password_input = '''        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password';
        passwordLabel.setAttribute('for', 'auth-password');
        
        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Password';
        passwordInput.id = 'auth-password';
        passwordInput.setAttribute('aria-labelledby', 'auth-password-label');
        passwordLabel.id = 'auth-password-label';'''

content = content.replace(old_password_input, new_password_input)

# Update form.appendChild to include labels
old_form1 = '''        form.appendChild(emailInput);

        const passwordInput = document.createElement('input');'''

new_form1 = '''        form.appendChild(emailLabel);
        form.appendChild(emailInput);

        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password';
        passwordLabel.setAttribute('for', 'auth-password');

        const passwordInput = document.createElement('input');'''

content = content.replace(old_form1, new_form1)

old_form2 = '''        form.appendChild(passwordInput);
        form.appendChild(signInBtn);'''

new_form2 = '''        form.appendChild(passwordLabel);
        form.appendChild(passwordInput);
        form.appendChild(signInBtn);'''

content = content.replace(old_form2, new_form2)

# Fix 5f: Remove tabindex from matched tiles
# When a pair is matched, remove tabindex from both tiles
# Find the matched pair section and add tabindex removal
old_match_success = '''              matchedPairs.add(pairKey);

              // Record this pair result for spaced repetition'''

new_match_success = '''              matchedPairs.add(pairKey);
              // Remove tabindex from matched tiles so keyboard users don't tab through them
              if (selectedLeft) selectedLeft.removeAttribute('tabindex');
              item.removeAttribute('tabindex');

              // Record this pair result for spaced repetition'''

content = content.replace(old_match_success, new_match_success)

# Write the updated content
with open(filepath, 'w') as f:
    f.write(content)

print('File updated successfully')