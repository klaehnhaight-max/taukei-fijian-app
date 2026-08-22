# iTaukei Language Learning App

A local, browser-based language-learning app modeled on Duolingo, for the iTaukei
(Na Vosa Vaka-Viti / Fijian) language — the indigenous language of Fiji.

## Running the App

```bash
cd /Users/calebklaehnhaight/.local/share/dev/fijian-app
python3 -m http.server PORT
```

Then open `http://localhost:PORT` in your browser.

No external accounts, no paid services, no API keys required. All progress is
saved locally in your browser's `localStorage`. Optionally sign in with a
Firebase account for cloud sync across devices.

## Syncing Across Devices (Optional)

Sign in with Email/Password or Google to sync your progress across devices.
This is entirely optional — the app works fully offline without any account.

### How it works
- **Sign-in is opt-in**: Click the ☁️ Sync button in the header to open the
  auth screen. Choose "Continue without an account" to skip forever.
- **Most-recent-wins merge**: When you sign in, your local progress and cloud
  progress are compared by timestamp. The newer one wins and is propagated to
  the other.
- **Always writes to localStorage first**: Even when signed in, your progress
  is saved to localStorage immediately so the app works offline. Firestore sync
  happens in the background.
- **Offline fallback**: If you're signed in but offline, localStorage is used
  as the source of truth. Sync resumes automatically when connectivity returns.

### Firebase setup (for self-hosters)
If you want to enable cloud sync, create a free Firebase project:
1. Go to [console.firebase.google.com](https://console.firebase.google.com/)
2. Create a project and add a web app
3. Enable Authentication (Email/Password + Google)
4. Create a Firestore database (production mode)
5. Paste the config values into the `firebaseConfig` object in `index.html`

### Firestore security rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Firebase free-tier limits
The Firebase Spark (free) plan is sufficient for personal and family use:
- 1 GB Firestore storage (you'll use ~1 KB per user)
- 50,000 reads/day, 20,000 writes/day, 20,000 deletes/day
- 10 GB network egress/month

For a single user syncing across 2-3 devices, usage will be negligible. A paid
plan ($0.06/GB) would only be needed for heavy multi-user usage exceeding these
limits.

## Features

- **14 skill-tree units**: Greetings, Numbers, Pronouns, Family, Body Parts,
  Colors, Food, Question Words, Basic Verbs, Simple Sentences, Animals,
  Nature & Weather, Descriptive Adjectives, Expanded Verbs
- **4 exercise types**: Multiple Choice, Matching, Sentence Builder (drag-and-drop),
  Typing (translation input)
- **Immediate feedback**: Right/wrong per question with correct answer shown on miss
- **Progress tracking**: XP, daily streak (with streak freeze forgiveness), per-lesson
  mastery percentage (all in localStorage)
- **Real spaced repetition**: Leitner-style intervals (1→3→7→14→30→90 days) with
  timestamp-based scheduling — both wrong and correct answers feed into the system
- **Review queue**: Items due for review are surfaced based on elapsed time,
  not a fixed replay count. Correctly answered items get longer intervals;
  wrong answers reset to the shortest interval
- **Daily goal**: Set and track a daily XP goal (default 50 XP) with a progress bar
  on the home screen
- **Streak freezes**: 3 built-in freezes prevent streak loss on missed days;
  used automatically before breaking a streak
- **Pronunciation guide**: Inline phonetic respelling on typing and sentence-builder
  exercises (e.g., "moce" → "mo-they"), plus a dedicated Pronunciation Guide screen
- **Source attributions**: Every vocabulary exercise lists its source(s)
- **Dark mode**: Automatic via `prefers-color-scheme`, with manual CSS variables
- **Mobile-responsive**: Works on phones and tablets, with accessible touch targets
- **Check Answer button**: Typing exercises have both Enter-to-submit and a
  visible Check button for touch devices
- **Accessibility**: Basic aria-labels and keyboard handlers for matching and
  sentence-builder exercises

## Source Verification

All vocabulary is verified from multiple independent sources. See `data.js` for
the full source list and `index.html` → Sources screen for attribution.

### Sources:
1. Peace Corps Fiji Language Course (Schutz & Komaitai, 1968)
2. Fijian Reference Grammar, Albert J. Schütz (2015, 2nd ed.)
3. Vosavakaviti.com online dictionary
4. PolyglotClub Wiki — Fijian vocabulary
5. Wikibooks Fijian (grammar, pronouns, phrases)
6. Pacific Learners (pacificlearners.co.nz)
7. 101 Languages — Fijian word list
8. TranslateWatu.com — Fijian phrases with pronunciation
9. Fiji Guide (fijiguide.com) — Schütz-verified phrases
10. Glosbe — Fijian-English dictionary
11. Wiktionary
12. Twinkl Fijian Colour Display Posters

### Known Discrepancy — Colors:
PolyglotClub [4] lists color words (drau=white, iro=black, etc.) that conflict
with cross-verified sources [7, 12] and are contradicted by Glosbe [10] (which
confirms "drau" means leaf/needle, not white). This app uses the cross-verified
set: vulavula=white, loaloa=black, damudamu=red, drokadroka=green, etc.

### Known Discrepancy — "sharp":
101 Languages [7] lists "sharp (as a knife) = gata", but Glosbe [10] confirms
"gata = snake". This appears to be a row error on 101 Languages' page. This app
uses "gata" = snake (per Glosbe [10] and the Fijian Wikipedia article on animals),
and "sharp" is excluded from Unit 13 (Descriptive Adjectives) until independently
verified from a third source.

### Known Quirk — "siga" double duty:
The word "siga" means both "sun" and "day" in Fijian — this is confirmed by
Glosbe [10] and is common across Austronesian languages. This is noted explicitly
in Unit 12's exercises rather than treated as an error.

### Cross-verification for units 11-14:
All vocabulary in Units 11-14 is sourced from 101 Languages [7] and cross-checked
against Glosbe [10]. Specific checks:
- "kolī" = dog (confirmed [10])
- "gata" = snake (confirmed [10], contradicts [7]'s "sharp" listing)
- "siga" = sun/day (confirmed [10])
- "lako mai" = come (confirmed [10])
- "qalo-va" = to swim (confirmed [10])
- All other Unit 11-14 vocabulary matches [7] entries exactly.

## Pronunciation Notes

- Vowels: a (ah), e (eh), i (ee), o (oh), u (oo)
- C = th (as in "thin"), NOT "see"
- Q = ng (as in "sing")
- D = nd (soft before consonants)
- G = ng (as in "finger")
- Stress typically on the penultimate syllable

## Files

- `index.html` — Complete self-contained web app (HTML + CSS + JS)
- `data.js` — All lesson content, skill tree, sources, pronunciation guide
- `README.md` — This file

## License

Educational use. All content sourced from publicly available language documentation.
