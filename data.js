// ============================================================
// iTaukei (Na Vosa Vaka-Viti) Language Learning App
// Data Module — All lesson content with source citations
// ============================================================

// Sources reference:
//  [1] Peace Corps Fiji Language Course (Schutz & Komaitai, 1968) / ERIC ED131593
//  [2] Fijian Reference Grammar, Albert J. Schütz (2015, 2nd ed.)
//  [3] Vosavakaviti.com online dictionary
//  [4] PolyglotClub Wiki — Fijian vocabulary
//  [5] Wikibooks Fijian (grammar, pronouns, phrases)
//  [6] Pacific Learners (pacificlearners.co.nz)
//  [7] 101 Languages — Fijian word list
//  [8] TranslateWatu.com — Fijian phrases with pronunciation
//  [9] Fiji Guide (fijiguide.com) — Schütz-verified phrases
//  [10] Glosbe — Fijian-English dictionary
//  [11] Wiktionary
//  [12] Twinkl Fijian Colour Display Posters

// ============================================================
// COLOR DISCREPANCY NOTE
// PolyglotClub [4] lists different color words (drau=white, iro=black,
// lolo=red, wailevu=green) that conflict with [7], [8], Quizlet, and
// a YouTube song. Glosbe [10] confirms "drau" means "leaf/needle" not
// "white". We use the cross-verified set from [7,8,Quizlet,YT] and
// flag [4]'s color list as potentially erroneous.
// ============================================================

const LESSONS = {
  "unit1": {
    title: "Greetings & Basic Phrases",
    description: "Learn essential Fijian greetings for everyday use",
    xp: 100,
    skills: [1, 3, 4],
    exercises: [
      {
        type: "matching",
        prompt: "Match the Fijian greeting to its English meaning",
        pairs: [
          { fijian: "Bula", english: "Hello / Life" },
          { fijian: "Ni sa bula", english: "Good day (formal)" },
          { fijian: "Ni sa yadra", english: "Good morning" },
          { fijian: "Ni sa bogi", english: "Good evening / Good night" },
          { fijian: "Moce", english: "Goodbye" },
          { fijian: "Sota tale", english: "See you later" }
        ],
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which word means 'thank you'?",
        choices: ["Io", "Sega", "Vinaka", "Kerekere"],
        answer: 2,
        explanation: "Vinaka literally means 'good' but is the standard way to say 'thank you'. [1][8][9]",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which word means 'no'?",
        choices: ["Io", "Sega", "Kerekere", "Moce"],
        answer: 1,
        explanation: "Sega means 'no'. The 'g' is pronounced as in 'sing'. [8][9]",
        sources: ["[8]", "[9]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build the phrase for 'Good morning'",
        words: ["ni", "sa", "yadra"],
        answer: "Ni sa yadra",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'Goodbye'",
        answer: "moce",
        note: "Remember: C is pronounced 'th', so 'moce' = 'mo-they'",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'Nice to meet you'?",
        choices: ["Au sega ni kila", "Au marau sara", "O cei ko iko?", "Sota tale"],
        answer: 1,
        explanation: "'Au marau sara' means 'Nice to meet you'. 'Au' = I, 'marau' relates to gladness/rejoicing, 'sara' = good. Literally 'I rejoice'. [8]",
        sources: ["[8]"]
      }
    ]
  },

  "unit2": {
    title: "Numbers 1-20",
    description: "Count from one to twenty in Fijian",
    xp: 100,
    skills: [2],
    exercises: [
      {
        type: "matching",
        prompt: "Match the number to its Fijian word",
        pairs: [
          { english: "1 (one)", fijian: "dua" },
          { english: "2 (two)", fijian: "rua" },
          { english: "3 (three)", fijian: "tolu" },
          { english: "4 (four)", fijian: "va" },
          { english: "5 (five)", fijian: "lima" },
          { english: "6 (six)", fijian: "ono" },
          { english: "7 (seven)", fijian: "vitu" },
          { english: "8 (eight)", fijian: "walu" },
          { english: "9 (nine)", fijian: "ciwa" },
          { english: "10 (ten)", fijian: "tini" }
        ],
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        prompt: "What is the number 5 in Fijian?",
        choices: ["ono", "lima", "tini", "ciwa"],
        answer: 1,
        explanation: "'lima' = five. [1][7][8]",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'three'",
        answer: "tolu",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'One' (dua) + 'ten' (tini)",
        words: ["dua", "tini"],
        answer: "dutini",
        note: "Note: Numbers 11-19 are 'tini ka X' (ten and X). 11 = tini kadua, 12 = tinikarua, 13 = tinitolu, 14 = tiniti, 15 = tinikalima, 16 = tinikavonovono, 17 = tinitavitu, 18 = tinikawalu, 19 = tinikaciwa. 20 = ruasagavulu. [2][7]",
        sources: ["[2]", "[7]"]
      }
    ]
  },

  "unit3": {
    title: "Personal Pronouns",
    description: "Learn who is speaking — I, you, he, she, we, they",
    xp: 100,
    skills: [4],
    exercises: [
      {
        type: "matching",
        prompt: "Match the pronoun to its meaning",
        pairs: [
          { fijian: "au", english: "I / me" },
          { fijian: "iko", english: "you (singular)" },
          { fijian: "koya", english: "he / she / him / her" },
          { fijian: "keda", english: "we (inclusive)" },
          { fijian: "keirau", english: "we (exclusive)" },
          { fijian: "kemuni", english: "you (plural/polite)" },
          { fijian: "irato", english: "they (plural)" }
        ],
        sources: ["[2]", "[4]", "[5]"]
      },
      {
        type: "multiple_choice",
        prompt: "What does 'keirau' mean?",
        choices: ["we (inclusive)", "we (exclusive)", "they", "you (plural)"],
        answer: 1,
        explanation: "'keirau' = we exclusive (you and I, but not the person we're speaking to). 'keda' is inclusive (we and you). [2][4][5]",
        sources: ["[2]", "[4]", "[5]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build the phrase for 'I' + 'am going' (au lako)",
        words: ["au", "lako"],
        answer: "Au lako",
        note: "In Fijian, 'I am going' = 'Au lako'. The 'au' is the subject marker for 'I'. [1][9]",
        sources: ["[1]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'we (inclusive)' in Fijian?",
        choices: ["keirau", "irato", "keda", "koyamada"],
        answer: 2,
        explanation: "'keda' = we inclusive (including the person we're speaking to). 'keirau' is exclusive (not including them). [2][4][5]",
        sources: ["[2]", "[4]", "[5]"]
      }
    ]
  },

  "unit4": {
    title: "Family Terms",
    description: "Talk about your family — parents, children, grandparents",
    xp: 120,
    skills: [1, 2, 5, 6],
    exercises: [
      {
        type: "matching",
        prompt: "Match the Fijian family word to its English meaning",
        pairs: [
          { english: "family", fijian: "vuvale" },
          { english: "father", fijian: "tamaqu" },
          { english: "mother", fijian: "tinaqu" },
          { english: "son", fijian: "luvequ tagane" },
          { english: "daughter", fijian: "luvequ yalewa" },
          { english: "grandfather", fijian: "tukaqu" },
          { english: "grandmother", fijian: "tubuqu" },
          { english: "brother", fijian: "ganequ" },
          { english: "sister", fijian: "taciqu" },
          { english: "grandchild", fijian: "makubuqu" }
        ],
        sources: ["[6]"]
      },
      {
        type: "multiple_choice",
        prompt: "What is 'tinaqu' in English?",
        choices: ["father", "mother", "grandmother", "sister"],
        answer: 1,
        explanation: "Tinaqu means 'mother'. The '-qu' is a possessive suffix meaning 'my'. [6]",
        sources: ["[6]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build the sentence: 'My father' = Tata + -qu",
        words: ["tata", "noqu"],
        answer: "noqu tata",
        note: "Possession in Fijian: use 'noqu' (my) before the noun for general nouns. For family terms, the '-qu' suffix can also be used. [2][4]",
        sources: ["[2]", "[4]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'brother'",
        answer: "ganequ",
        sources: ["[6]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'grandchild' in Fijian?",
        choices: ["tukaqu", "tubuqu", "makubuqu", "ganequ"],
        answer: 2,
        explanation: "'Makubuqu' means grandchild. 'tukaqu' is grandfather, 'tubuqu' is grandmother. [6]",
        sources: ["[6]"]
      }
    ]
  },

  "unit5": {
    title: "Body Parts",
    description: "Learn the names of body parts in Fijian",
    xp: 110,
    skills: [2],
    exercises: [
      {
        type: "matching",
        prompt: "Match the body part to its Fijian word",
        pairs: [
          { english: "head", fijian: "ulu" },
          { english: "eye", fijian: "mata" },
          { english: "nose", fijian: "ucu" },
          { english: "mouth", fijian: "gusu" },
          { english: "tooth", fijian: "bati" },
          { english: "tongue", fijian: "yame" },
          { english: "ear", fijian: "daliga" },
          { english: "hand", fijian: "liga" },
          { english: "leg / foot", fijian: "yava" },
          { english: "heart", fijian: "uto" },
          { english: "knee", fijian: "duru" },
          { english: "throat", fijian: "nona" }
        ],
        sources: ["[6]", "[7]", "[11]"]
      },
      {
        type: "multiple_choice",
        prompt: "What does 'mata' mean?",
        choices: ["mouth", "eye", "ear", "head"],
        answer: 1,
        explanation: "'mata' = eye. [6][7][11]",
        sources: ["[6]", "[7]", "[11]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'heart'",
        answer: "uto",
        sources: ["[6]", "[7]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'My throat' = Nona + -qu",
        words: ["nona", "noqu"],
        answer: "noqu nona",
        note: "'nona' = throat, used with possessive 'noqu' (my). [7][11]",
        sources: ["[7]", "[11]"]
      }
    ]
  },

  "unit6": {
    title: "Colors",
    description: "Learn basic colors in Fijian",
    xp: 110,
    skills: [2],
    exercises: [
      {
        type: "matching",
        prompt: "Match the color to its Fijian word",
        pairs: [
          { english: "white", fijian: "vulavula" },
          { english: "black", fijian: "loaloa" },
          { english: "red", fijian: "damudamu" },
          { english: "blue", fijian: "karakarawa" },
          { english: "green", fijian: "drokadroka" },
          { english: "yellow", fijian: "dromodromo" },
          { english: "purple", fijian: "lokaloka" },
          { english: "orange", fijian: "seninawanawa" },
          { english: "brown", fijian: "masikuvui" },
          { english: "pink", fijian: "piqi" }
        ],
        sources: ["[7]", "[12]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which word means 'red'?",
        choices: ["loaloa", "damudamu", "karakarawa", "drokadroka"],
        answer: 1,
        explanation: "'damudamu' means red. Cross-verified from [7] and [12].",
        sources: ["[7]", "[12]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'green'",
        answer: "drokadroka",
        sources: ["[7]", "[12]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'The red car' (Na waqa damudamu)",
        words: ["na", "waqa", "damudamu"],
        answer: "Na waqa damudamu",
        note: "In Fijian, color + object: 'Na waqa damudamu' = 'the red car'. [7]",
        sources: ["[7]"]
      }
    ]
  },

  "unit7": {
    title: "Food & Drink",
    description: "Learn words for common foods, drinks, and meals",
    xp: 120,
    skills: [1, 4],
    exercises: [
      {
        type: "matching",
        prompt: "Match the Fijian food word to its English",
        pairs: [
          { fijian: "kakana", english: "food / eat" },
          { fijian: "ika", english: "fish" },
          { fijian: "lewe", english: "meat" },
          { fijian: "dalo", english: "taro" },
          { fijian: "tavioka", english: "cassava" },
          { fijian: "niu", english: "coconut" },
          { fijian: "wai", english: "water" },
          { fijian: "rais", english: "rice" },
          { fijian: "madrai", english: "bread" },
          { fijian: "kofi", english: "coffee" },
          { fijian: "ti", english: "tea" },
          { fijian: "bia", english: "beer" },
          { fijian: "bele", english: "greens (Fijian spinach)" }
        ],
        sources: ["[1]", "[6]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        prompt: "What does 'dalo' mean?",
        choices: ["cassava", "taro", "breadfruit", "coconut"],
        answer: 1,
        explanation: "Dalo is the Fijian word for taro, a staple root crop. [1][6][8]",
        sources: ["[1]", "[6]", "[8]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'I eat' = Au + kana",
        words: ["au", "kana"],
        answer: "Au kana",
        note: "'kana' = eat (verb). 'Au kana' = I eat. [1][7]",
        sources: ["[1]", "[7]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'water'",
        answer: "wai",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'I am hungry'?",
        choices: ["Au viakana", "Au viainu", "Au kana", "Au gunu"],
        answer: 0,
        explanation: "'Au viakana' = I am hungry. 'viakana' comes from 'kana' (eat). [8]",
        sources: ["[8]"]
      }
    ]
  },

  "unit8": {
    title: "Question Words",
    description: "Ask 'what', 'who', 'where', 'when', and 'how many'",
    xp: 110,
    skills: [3, 4],
    exercises: [
      {
        type: "matching",
        prompt: "Match the question word to its meaning",
        pairs: [
          { fijian: "cava", english: "what" },
          { fijian: "cei", english: "who" },
          { fijian: "ko", english: "where / this place" },
          { fijian: "naica", english: "when" },
          { fijian: "e vica", english: "how many / how much" },
          { fijian: "vakacava", english: "how" },
          { fijian: "sega ni", english: "not" }
        ],
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which word means 'what'?",
        choices: ["cei", "cava", "naica", "vakacava"],
        answer: 1,
        explanation: "'cava' = what. Remember C is pronounced 'th'. [1][5][8][9]",
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'What is your name?' (O cei ko iko?)",
        words: ["o", "cei", "ko", "iko"],
        answer: "O cei ko iko?",
        note: "'O' is the subject marker, 'cei' = what/who, 'ko' = is/are, 'iko' = you. [8]",
        sources: ["[8]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian word for 'how many'",
        answer: "e vica",
        sources: ["[1]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'Where are you from?'?",
        choices: ["O ni lako mai vei?", "O iko mai vei?", "Cei sa mai?", "Ko iko mai vei?"],
        answer: 0,
        explanation: "'O ni lako mai vei?' = Where are you from? 'ni lako mai' = coming/going. [9]",
        sources: ["[9]"]
      }
    ]
  },

  "unit9": {
    title: "Basic Verbs",
    description: "Learn common verbs — eat, drink, go, come, see, know, and more",
    xp: 130,
    skills: [7, 9, 10],
    exercises: [
      {
        type: "matching",
        prompt: "Match the Fijian verb to its English meaning",
        pairs: [
          { english: "eat", fijian: "kana" },
          { english: "drink", fijian: "gunu" },
          { english: "go", fijian: "lako" },
          { english: "come", fijian: "mai" },
          { english: "see", fijian: "rai" },
          { english: "hear", fijian: "rogo" },
          { english: "know", fijian: "kila" },
          { english: "think/remember", fijian: "nanuma" },
          { english: "work/do", fijian: "cakacaka" },
          { english: "say/tell", fijian: "vosa" },
          { english: "give", fijian: "tau" }
        ],
        sources: ["[1]", "[5]", "[7]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which verb means 'go'?",
        choices: ["mai", "lako", "kana", "rai"],
        answer: 1,
        explanation: "'lako' = go. 'mai' = come. Remember the 'c' in 'cakacaka' is 'th'. [1][7][9]",
        sources: ["[1]", "[7]", "[9]"]
      },
      {
        type: "sentence_builder",
        prompt: "Build: 'I go' = Au + lako",
        words: ["au", "lako"],
        answer: "Au lako",
        note: "'Au' is the subject pronoun for 'I'. Verb follows subject. [1]",
        sources: ["[1]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian verb for 'to hear/listen'",
        answer: "rogo",
        sources: ["[7]"]
      },
      {
        type: "multiple_choice",
        prompt: "How do you say 'Can you speak English?'",
        choices: ["E donu me o vosa Vavalagi?", "Au sega ni kila", "O sa bula?", "Kerekere vosa"],
        answer: 0,
        explanation: "'E donu me o vosa vaka-Vavalagi?' = Can you speak English? 'vaka-Vavalagi' = like/for English. [1][8]",
        sources: ["[1]", "[8]"]
      }
    ]
  },

  "unit10": {
    title: "Simple Sentences & Grammar",
    description: "Build simple sentences using pronouns, verbs, and nouns",
    xp: 140,
    skills: [8, 9, 10, 11],
    exercises: [
      {
        type: "sentence_builder",
        prompt: "Build: 'I am from New Zealand' (Au mai Niu Siladi)",
        words: ["au", "mai", "niu", "siladi"],
        answer: "Au lako mai Niu Siladi",
        note: "'Au' = I, 'lako mai' = come from, 'Niu Siladi' = New Zealand. [9]",
        sources: ["[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "Which is the correct sentence for 'He is a teacher'?",
        choices: ["Au na qasenivuli", "O koya na qasenivuli", "O koya qasenivuli", "E koya na qasenivuli"],
        answer: 1,
        explanation: "'O koya na qasenivuli' = He is a teacher. 'O' marks the proper subject, 'koya' = he, 'na' = the, 'qasenivuli' = teacher. [5]",
        sources: ["[5]"]
      },
      {
        type: "matching",
        prompt: "Match the Fijian sentence pattern to its English meaning",
        pairs: [
          { fijian: "Au lako mai ...", english: "I am from ..." },
          { fijian: "O iko mai vei?", english: "Where are you from?" },
          { fijian: "E vica na isau?", english: "How much does this cost?" },
          { fijian: "Au sega ni kila", english: "I don't understand" },
          { fijian: "Sa macala au", english: "I understand" }
        ],
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "typing",
        prompt: "Type the Fijian for: 'Where are you from?'",
        answer: "o iko mai vei",
        sources: ["[1]", "[5]", "[9]"]
      },
      {
        type: "multiple_choice",
        prompt: "What does 'Au sega ni kila' mean?",
        choices: ["I understand", "I don't understand", "I am from", "I am hungry"],
        answer: 1,
        explanation: "'Au sega ni kila' = I don't understand. 'sega' = not, 'kila' = know/understand. [8]",
        sources: ["[8]"]
      }
    ]
  }
};

// Skill tree structure for the home page
const SKILL_TREE = [
  {
    id: "unit1",
    title: "Greetings",
    description: "Say hello, goodbye, and thank you",
    icon: "👋",
    xp: 100,
    prerequisites: [],
    unlocked: true
  },
  {
    id: "unit2",
    title: "Numbers",
    description: "Count from 1 to 20",
    icon: "🔢",
    xp: 100,
    prerequisites: ["unit1"],
    unlocked: false
  },
  {
    id: "unit3",
    title: "Pronouns",
    description: "I, you, he, she, we, they",
    icon: "🙋",
    xp: 100,
    prerequisites: ["unit1"],
    unlocked: false
  },
  {
    id: "unit4",
    title: "Family",
    description: "Family members and relationships",
    icon: "👨‍👩‍👧",
    xp: 120,
    prerequisites: ["unit2", "unit3"],
    unlocked: false
  },
  {
    id: "unit5",
    title: "Body Parts",
    description: "Name parts of the body",
    icon: "💪",
    xp: 110,
    prerequisites: ["unit1"],
    unlocked: false
  },
  {
    id: "unit6",
    title: "Colors",
    description: "Basic color vocabulary",
    icon: "🎨",
    xp: 110,
    prerequisites: ["unit2"],
    unlocked: false
  },
  {
    id: "unit7",
    title: "Food",
    description: "Foods, drinks, and meals",
    icon: "🍽️",
    xp: 120,
    prerequisites: ["unit2", "unit3"],
    unlocked: false
  },
  {
    id: "unit8",
    title: "Questions",
    description: "Ask 'what', 'who', 'where', 'when'",
    icon: "❓",
    xp: 110,
    prerequisites: ["unit3"],
    unlocked: false
  },
  {
    id: "unit9",
    title: "Verbs",
    description: "Eat, drink, go, come, see, know",
    icon: "🏃",
    xp: 130,
    prerequisites: ["unit3", "unit7"],
    unlocked: false
  },
  {
    id: "unit10",
    title: "Sentences",
    description: "Build simple Fijian sentences",
    icon: "📝",
    xp: 140,
    prerequisites: ["unit4", "unit8", "unit9"],
    unlocked: false
  }
];

// Sources reference object for in-app display
const SOURCES = {
  "[1]": "Peace Corps Fiji Language Course (Schutz & Komaitai, 1968)",
  "[2]": "Fijian Reference Grammar, Albert J. Schütz (2015, 2nd ed.)",
  "[3]": "Vosavakaviti.com online dictionary",
  "[4]": "PolyglotClub Wiki - Fijian vocabulary",
  "[5]": "Wikibooks Fijian",
  "[6]": "Pacific Learners (pacificlearners.co.nz)",
  "[7]": "101 Languages - Fijian word list",
  "[8]": "TranslateWatu.com - Fijian phrases",
  "[9]": "Fiji Guide (fijiguide.com)",
  "[10]": "Glosbe - Fijian-English dictionary",
  "[11]": "Wiktionary",
  "[12]": "Twinkl Fijian Colour Display Posters"
};

// Pronunciation Guide
const PRONUNCIATION = {
  vowels: [
    { char: "a", sound: "ah", example: "as in 'father'" },
    { char: "e", sound: "eh", example: "as in 'error'" },
    { char: "i", sound: "ee", example: "as in 'see'" },
    { char: "o", sound: "oh", example: "as in 'go'" },
    { char: "u", sound: "oo", example: "as in 'food'" }
  ],
  consonants: [
    { char: "c", sound: "th", example: "as in 'thin' — NOT 'see'" },
    { char: "q", sound: "ng", example: "as in 'sing' — found in 'q' words" },
    { char: "d", sound: "nd", example: "soft 'd' before consonants becomes 'n'" },
    { char: "g", sound: "ng", example: "as in 'finger'" },
    { char: "b", sound: "mb", example: "almost always written with preceding 'm'" }
  ],
  tips: [
    "Long vowels are written doubled: 'aa', 'ee', 'ii', 'oo', 'uu'",
    "Stress usually falls on the penultimate (second-to-last) syllable",
    "The glottal stop is written as an apostrophe: '",
    "Double consonants like 'dr', 'gr', 'tr' are pronounced as single sounds"
  ]
};

// Export for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS, SKILL_TREE, SOURCES, PRONUNCIATION };
}