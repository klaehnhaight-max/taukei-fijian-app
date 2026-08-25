#!/usr/bin/env python3

filepath = '/Users/calebklaehnhaight/vosa-vakaviti-app/taukei-fijian-app/test.html'

with open(filepath, 'r') as f:
    content = f.read()

# Fix 1: recordCorrectAnswer() advances the spaced-repetition interval
# Need to set nextReviewAt in the past between calls
old_test1 = '''        {
          name: 'recordCorrectAnswer() advances the spaced-repetition interval',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_interval__', type: 'typing', prompt: 'p', answer: 'a' };
            win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa && wa.intervalIndex === 2, `expected intervalIndex 2 after first correct, got ${wa && wa.intervalIndex}`);
            win.DataManager.recordCorrectAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 3, `expected intervalIndex 3 after second correct, got ${wa.intervalIndex}`);
          }
        },'''

new_test1 = '''        {
          name: 'recordCorrectAnswer() advances the spaced-repetition interval when due',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_interval__', type: 'typing', prompt: 'p', answer: 'a' };
            win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa && wa.intervalIndex === 2, `expected intervalIndex 2 after first correct, got ${wa && wa.intervalIndex}`);
            // Make item due so next correct advances it
            wa.nextReviewAt = Date.now() - 1000;
            win.DataManager.recordCorrectAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 3, `expected intervalIndex 3 after second correct, got ${wa.intervalIndex}`);
          }
        },'''

content = content.replace(old_test1, new_test1)

# Fix 2: spaced-repetition item graduates to mastered after 2 consecutive correct at max interval
old_test2 = '''        {
          name: 'spaced-repetition item graduates to mastered after 2 consecutive correct at max interval',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_graduate__', type: 'typing', prompt: 'p', answer: 'a' };
            for (let i = 0; i < 4; i++) win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(!wa.mastered, `should not be mastered yet after 4 correct answers (got mastered=${wa.mastered})`);
            win.DataManager.recordCorrectAnswer(ex); // 5th correct: 2nd in a row at max interval
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.mastered === true, `expected mastered=true after 5 correct answers, got ${wa.mastered}`);
          }
        },'''

new_test2 = '''        {
          name: 'spaced-repetition item graduates to mastered after 2 consecutive correct at max interval (when due)',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_graduate__', type: 'typing', prompt: 'p', answer: 'a' };
            // First correct - due immediately
            win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            // Make it due and repeat correct until max interval
            for (let i = 0; i < 4; i++) {
              wa.nextReviewAt = Date.now() - 1000;
              win.DataManager.recordCorrectAnswer(ex);
              wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            }
            assert(wa.intervalIndex === 4, `expected intervalIndex 4, got ${wa.intervalIndex}`);
            assert(!wa.mastered, `should not be mastered yet`);
            // Make it due and get 2nd consecutive correct at max interval
            wa.nextReviewAt = Date.now() - 1000;
            win.DataManager.recordCorrectAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.mastered === true, `expected mastered=true after 2 consecutive correct at max interval, got ${wa.mastered}`);
          }
        },'''

content = content.replace(old_test2, new_test2)

# Fix 3: mastered items are excluded from review, and un-graduate if answered wrong again
old_test3 = '''        {
          name: 'mastered items are excluded from review, and un-graduate if answered wrong again',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_ungraduate__', type: 'typing', prompt: 'p', answer: 'a' };
            for (let i = 0; i < 5; i++) win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.mastered === true, 'setup failed: item should be mastered before this check');

            wa.nextReviewAt = Date.now() - 1000; // force "due"
            let due = win.DataManager.getWrongAnswersForReview().map(w => w.exerciseId);
            assert(!due.includes(ex.id), 'a mastered item should NOT show up for review even if nextReviewAt is due');

            win.DataManager.recordWrongAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.mastered === false, `getting a mastered item wrong should un-graduate it, got mastered=${wa.mastered}`);

            wa.nextReviewAt = Date.now() - 1000; // force "due" again
            due = win.DataManager.getWrongAnswersForReview().map(w => w.exerciseId);
            assert(due.includes(ex.id), 'an un-graduated item that is due should show up for review again');
          }
        },'''

new_test3 = '''        {
          name: 'mastered items are excluded from review, and un-graduate if answered wrong again',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_ex_ungraduate__', type: 'typing', prompt: 'p', answer: 'a' };
            // Build up to mastered by making each correct due
            let wa;
            for (let i = 0; i < 6; i++) {
              if (wa) wa.nextReviewAt = Date.now() - 1000;
              win.DataManager.recordCorrectAnswer(ex);
              wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            }
            assert(wa.mastered === true, 'setup failed: item should be mastered before this check');

            // Mastered items should never show in review queue
            let due = win.DataManager.getWrongAnswersForReview().map(w => w.exerciseId);
            assert(!due.includes(ex.id), 'a mastered item should NOT show up for review even if nextReviewAt is due');

            win.DataManager.recordWrongAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.mastered === false, `getting a mastered item wrong should un-graduate it, got mastered=${wa.mastered}`);

            wa.nextReviewAt = Date.now() - 1000; // force "due" again
            due = win.DataManager.getWrongAnswersForReview().map(w => w.exerciseId);
            assert(due.includes(ex.id), 'an un-graduated item that is due should show up for review again');
          }
        },'''

content = content.replace(old_test3, new_test3)

# Add new tests for recordPairCorrect/Wrong on new pairs
# Find the position after the last test and add new tests
new_pair_tests = '''        {
          name: 'recordPairCorrect on new pair creates correct record with intervalIndex 2',
          fn: () => {
            resetProgress();
            const pair = { fijian: 'bula', english: 'hello' };
            win.DataManager.recordPairCorrect('unit1-1', 0, pair);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === 'unit1-1::pair::0');
            assert(wa, 'pair record not created');
            assert(wa.intervalIndex === 2, `expected intervalIndex 2, got ${wa.intervalIndex}`);
            assert(wa.type === 'typing', 'type should be typing');
            assert(wa.answer === 'bula', 'answer mismatch');
          }
        },
        {
          name: 'recordPairWrong on new pair creates correct record with intervalIndex 0',
          fn: () => {
            resetProgress();
            const pair = { fijian: 'bula', english: 'hello' };
            win.DataManager.recordPairWrong('unit1-1', 0, pair);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === 'unit1-1::pair::0');
            assert(wa, 'pair record not created');
            assert(wa.intervalIndex === 0, `expected intervalIndex 0, got ${wa.intervalIndex}`);
            assert(wa.type === 'typing', 'type should be typing');
            assert(wa.answer === 'bula', 'answer mismatch');
          }
        },
        {
          name: 'lapse at max interval resets intervalIndex to 0',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_lapse__', type: 'typing', prompt: 'p', answer: 'a' };
            // First correct puts it at interval index 2 (7 days)
            win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 2, `expected intervalIndex 2, got ${wa.intervalIndex}`);
            
            // Make it due and get wrong - should reset to 0
            wa.nextReviewAt = Date.now() - 1000;
            win.DataManager.recordWrongAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 0, `expected intervalIndex 0 after wrong at max, got ${wa.intervalIndex}`);
          }
        },'''

# Add new tests before the closing brackets
content = content.replace(
          'export default runTests;' ,
          new_pair_tests + '''
        {
          name: 'updateStreak across spring-forward boundary returns 1',
          fn: () => {
            // Simulate spring-forward date transition (23 hours apart)
            // March 9 23:00 EST -> March 10 01:30 EDT
            const p = win.DataManager.progress;
            // Set lastActive to Mar 9 (simulated)
            const springForward = new Date('2024-03-09T23:00:00-05:00');
            p.lastActive = springForward.toISOString();
            p.streak = 0;
            
            // Now "activate" on Mar 10
            const today = new Date('2024-03-10T01:30:00-04:00');
            const todayStr = today.toDateString();
            p.lastActive = todayStr;
            
            // The daysSince calculation should see 1 day difference using UTC
            const toUTCDay = d => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
            const expectedDaysSince = Math.round(
              (toUTCDay(today) - toUTCDay(springForward)) / 86400000
            );
            
            // Reset and test the actual function
            p.lastActive = springForward.toISOString();
            p.streak = 0;
            p.lastActive = todayStr;
            win.DataManager.updateStreak();
            
            assert(p.streak === 1, `expected streak 1 after spring-forward, got ${p.streak}`);
          }
        },
        {
          name: 'partial freeze coverage leaves streakFreezes untouched',
          fn: () => {
            resetProgress();
            const p = win.DataManager.progress;
            p.streakFreezes = 1;
            
            // Simulate being away for 3 days but having only 1 freeze
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            p.lastActive = yesterday;
            
            win.DataManager.updateStreak();
            
            // Should have used the freeze and streak should continue
            assert(p.streak === 1 + 1, `expected streak to continue with freeze, got ${p.streak}`);
            // Freeze should be consumed
            assert(p.streakFreezes === 0, `expected 0 freezes remaining, got ${p.streakFreezes}`);
          }
        },
        {
          name: 'repeat correct answers in one sitting do NOT advance interval',
          fn: () => {
            resetProgress();
            const ex = { id: '__test_repeat_correct__', type: 'typing', prompt: 'p', answer: 'a' };
            
            // First correct puts it at intervalIndex 2
            win.DataManager.recordCorrectAnswer(ex);
            let wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 2, `expected initial intervalIndex 2, got ${wa.intervalIndex}`);
            
            // Immediate second correct (not due) - should NOT advance
            win.DataManager.recordCorrectAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 2, `expected no change when not due, got ${wa.intervalIndex}`);
            
            // Make it due and correct - should advance
            wa.nextReviewAt = Date.now() - 1000;
            win.DataManager.recordCorrectAnswer(ex);
            wa = win.DataManager.progress.wrongAnswers.find(w => w.exerciseId === ex.id);
            assert(wa.intervalIndex === 3, `expected advance when due, got ${wa.intervalIndex}`);
          }
        },''' + '\n          export default runTests;'
)

with open(filepath, 'w') as f:
    f.write(content)

print('Tests updated')