#!/usr/bin/env node
/**
 * validate-data.js — Static validation for exercises in data.js
 *
 * Run: node validate-data.js
 *
 * Loads data.js, then checks:
 *   1. Every sentence_builder exercise: words can be rearranged to form the answer
 *      (using the SAME normalization as index.html's normalizeForCompare).
 *   2. Every multiple_choice exercise: the `answer` index is within bounds of `choices`.
 *   3. Every matching exercise: no duplicate English or Fijian values within pairs.
 *   4. Every exercise's `sources` array: each source key exists in `SOURCES`.
 *   5. Every matching exercise: between 2 and 6 pairs (split requirement).
 *
 * Exits non-zero and prints offending ids if any check fails.
 */

'use strict';
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const raw = fs.readFileSync(dataPath, 'utf8');

const wrapper = `(function() { ${raw}; return { LESSONS: typeof LESSONS !== 'undefined' ? LESSONS : {}, SOURCES: typeof SOURCES !== 'undefined' ? SOURCES : {} }; })()`;

// eslint-disable-next-line no-eval
let namespace;
try {
  namespace = eval(wrapper);
} catch (e) {
  console.error('Failed to evaluate data.js:', e.message);
  process.exit(2);
}

const LESSONS = namespace.LESSONS;
const SOURCES = namespace.SOURCES;

// ─── normalizeForCompare — must match index.html exactly ───────────
function normalizeForCompare(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, ' ')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ─── normalizeSentence — matches index.html's normalizeSentence ─────
// Strips all whitespace, punctuation, and diacritics — used by
// renderSentenceBuilder where placed words are concatenated without spaces.
function normalizeSentence(s) {
  return normalizeForCompare(s).replace(/[^\w]/g, '');
}

// ─── Check if words can be rearranged to form the answer ───────────
// The drop handler in renderSentenceBuilder concatenates placed words
// (joined with no separator — words are placed adjacent) and compares
// against normalizeForCompare(exercise.answer).
// So we need to check: can we permute `words` such that joining them
// (in that order, no separator) == normalizeForCompare(answer)?
// Actually: the app joins words as they're placed, then normalizes.
// Words are placed adjacent (no spaces), so:
//   placed = word1 + word2 + word3  (no separator)
//   normalizeForCompare(placed) should == normalizeForCompare(answer)
// normalizeForCompare strips spaces and punctuation, so the test is:
//   can we permute words so that concatenated lowercase words ==
//   answer with spaces/punctuation removed?
function canFormAnswer(words, answer) {
  const normAnswer = normalizeSentence(answer);  // spaces/punct/diacritics/whitespace all stripped
  const normWords = words.map(normalizeSentence);

  // Generate all permutations and check if any permutation's
  // concatenated join equals the normalized answer.
  function permutations(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const perm of permutations(rest)) {
        result.push([arr[i]].concat(perm));
      }
    }
    return result;
  }

  // For efficiency with >8 words, fall back to character multiset comparison
  if (normWords.length > 8) {
    // Character-based check: sorted chars of concatenated words == sorted chars of answer
    const wordChars = normWords.join('').split('').sort().join('');
    const answerChars = normAnswer.split('').sort().join('');
    return wordChars === answerChars;
  }

  for (const perm of permutations(normWords)) {
    if (perm.join('') === normAnswer) {
      return true;
    }
  }
  return false;
}

let failures = [];
let checked = 0;

// ─── Check 1: sentence_builder words can form answer ───────────────
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.type === 'sentence_builder') {
      checked++;
      if (!canFormAnswer(ex.words, ex.answer)) {
        failures.push(`sentence_builder ${ex.id}: words [${ex.words.join(', ')}] cannot form answer "${ex.answer}"`);
      }
    }
  }
}

// ─── Check 2: multiple_choice answer index in bounds ───────────────
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.type === 'multiple_choice') {
      checked++;
      if (typeof ex.answer === 'number') {
        const choices = ex.choices || [];
        if (ex.answer < 0 || ex.answer >= choices.length) {
          failures.push(`multiple_choice ${ex.id}: answer index ${ex.answer} out of bounds for ${choices.length} choices`);
        }
      }
    }
  }
}

// ─── Check 3: no duplicate English/Fijian values in matching pairs ──
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.type === 'matching') {
      checked++;
      const pairs = ex.pairs || [];
      const seen = new Set();
      for (const pair of pairs) {
        const fijian = (pair.fijian || pair.english || '').trim().toLowerCase();
        const english = (pair.english || pair.fijian || '').trim().toLowerCase();
        if (seen.has('f:' + fijian)) {
          failures.push(`matching ${ex.id}: duplicate Fijian value "${fijian}"`);
        }
        if (seen.has('e:' + english)) {
          failures.push(`matching ${ex.id}: duplicate English value "${english}"`);
        }
        seen.add('f:' + fijian);
        seen.add('e:' + english);
      }
    }
  }
}

// ─── Check 4: every source key exists in SOURCES ───────────────────
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.sources && Array.isArray(ex.sources)) {
      for (const src of ex.sources) {
        checked++;
        if (!(src in SOURCES)) {
          failures.push(`exercise ${ex.id || ex.type}: source '${src}' not found in SOURCES object`);
        }
      }
    }
  }
}

// ─── Check 5: matching exercise pair count constraints ────────────
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.type === 'matching') {
      checked++;
      const pairs = ex.pairs || [];
      if (pairs.length > 6) {
        failures.push(`matching ${ex.id}: has ${pairs.length} pairs (max 6 allowed)`);
      }
      if (pairs.length < 2) {
        failures.push(`matching ${ex.id}: has ${pairs.length} pairs (min 2 required)`);
      }
    }
  }
}

// ─── Check 6: sentence_builder prompt does not leak the answer ────────
// The prompt must not contain a normalized form of the Fijian answer,
// so the learner must reconstruct the phrase from word tiles rather
// than reading it off the prompt. Uses normalizeSentence() — the same
// normalization the app's renderSentenceBuilder uses when comparing
// placed words against the answer.
for (const unitId of Object.keys(LESSONS)) {
  const unit = LESSONS[unitId];
  if (!unit || !unit.exercises) continue;
  for (const ex of unit.exercises) {
    if (ex.type === 'sentence_builder') {
      checked++;
      if (normalizeSentence(ex.prompt).includes(normalizeSentence(ex.answer))) {
        failures.push(`sentence_builder ${ex.id}: prompt leaks answer "${ex.answer}" — prompt text must not contain the Fijian answer`);
      }
    }
  }
}

// ─── Report ────────────────────────────────────────────────────────
if (failures.length > 0) {
  console.error('❌ ' + failures.length + ' validation failure(s) found (' + checked + ' checks run):');
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
} else {
  console.log('✅ All ' + checked + ' exercise checks passed — no sentence_builder, multiple_choice, matching, or source issues found.');
  process.exit(0);
}
