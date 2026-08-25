#!/usr/bin/env python3
import re

filepath = '/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/index.html'

with open(filepath, 'r') as f:
    content = f.read()

# Fix 1: Add tabindex="-1" to feedback div in showFeedback
# Find the line where feedback is created
old_feedback = '''      showFeedback(container, cssClass, html) {
        let feedback = container.querySelector('.feedback');
        if (!feedback) {
          feedback = document.createElement('div');
          feedback.setAttribute('aria-live', 'polite');
          container.appendChild(feedback);
        }'''

new_feedback = '''      showFeedback(container, cssClass, html) {
        let feedback = container.querySelector('.feedback');
        if (!feedback) {
          feedback = document.createElement('div');
          feedback.setAttribute('aria-live', 'polite');
          feedback.setAttribute('tabindex', '-1');
          container.appendChild(feedback);
        }'''

content = content.replace(old_feedback, new_feedback)

# Fix 2: Update --secondary color
old_secondary = '''      --secondary: #F57C00;    /* Darkened orange: 4.52:1 on white '''
new_secondary = '''      --secondary: #A85400;    /* Dark orange: 5.34:1 on white, 4.76:1 on --bg '''
content = content.replace(old_secondary, new_secondary)

# Fix 3: Update correct feedback tint
old_correct_tint = '''    .feedback.correct {
      background: rgba(16, 185, 135, 0.15);
      color: var(--correct);'''
new_correct_tint = '''    .feedback.correct {
      background: rgba(21, 138, 101, 0.15);
      color: var(--correct);'''
content = content.replace(old_correct_tint, new_correct_tint)

# Fix 4: Update --correct color for better contrast on the new tint
old_correct_color = '''      --correct: #158a65;        /* Darker green for 4.5+ contrast on light bg '''
new_correct_color = '''      --correct: #0F6B4E;        /* Darker green for 5.36:1 on correct tint bg'''
content = content.replace(old_correct_color, new_correct_color)

# Fix 5: Replace #666 with var(--text-secondary) - multiple occurrences
# The pattern is: '<small style="color:#666">' or style='color:#666' or .style.color = '#666'
content = content.replace('<small style="color:#666">', '<small style="color:var(--text-secondary)">')
content = content.replace('.style.color = \'#666\';', '.style.color = \'var(--text-secondary)\';')

with open(filepath, 'w') as f:
    f.write(content)

print('File updated successfully')