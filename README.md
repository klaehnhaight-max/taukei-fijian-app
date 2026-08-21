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
saved locally in your browser's `localStorage`.

## Features

- **10 skill-tree units**: Greetings, Numbers, Pronouns, Family, Body Parts,
  Colors, Food, Question Words, Basic Verbs, Simple Sentences
- **4 exercise types**: Multiple Choice, Matching, Sentence Builder (drag-and-drop),
  Typing (translation input)
- **Immediate feedback**: Right/wrong per question with correct answer shown on miss
- **Progress tracking**: XP, daily streak, per-lesson mastery (all in localStorage)
- **Review mode**: Spaced repetition that resurfaces answers you got wrong
- **Pronunciation guide**: Fijian sound guide with tricky consonant notes
- **Source attributions**: Every vocabulary exercise lists its source(s)

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
