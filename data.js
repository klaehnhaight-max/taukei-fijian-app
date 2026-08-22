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
        id: "unit1-1",
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
        id: "unit1-2",
        prompt: "Which word means 'thank you'?",
        choices: ["Io", "Sega", "Vinaka", "Kerekere"],
        answer: 2,
        explanation: "Vinaka literally means 'good' but is the standard way to say 'thank you'. [1][8][9]",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit1-3",
        prompt: "Which word means 'no'?",
        choices: ["Io", "Sega", "Kerekere", "Moce"],
        answer: 1,
        explanation: "Sega means 'no'. The 'g' is pronounced as in 'sing'. [8][9]",
        sources: ["[8]", "[9]"]
      },
      {
        type: "sentence_builder",
        id: "unit1-4",
        prompt: "Build the phrase for 'Good morning'",
        words: ["ni", "sa", "yadra"],
        answer: "Ni sa yadra",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "typing",
        id: "unit1-5",
        prompt: "Type the Fijian word for 'Goodbye'",
        answer: "moce",
        note: "Remember: C is pronounced 'th', so 'moce' = 'mo-they'",
        sources: ["[1]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit1-6",
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
        id: "unit2-1-a",
        prompt: "Match the number to its Fijian word",
        pairs: [
          { english: "1 (one)", fijian: "dua" },
          { english: "2 (two)", fijian: "rua" },
          { english: "3 (three)", fijian: "tolu" },
          { english: "4 (four)", fijian: "va" },
          { english: "5 (five)", fijian: "lima" },
          { english: "6 (six)", fijian: "ono" }
        ],
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "matching",
        id: "unit2-1-b",
        prompt: "Match the number to its Fijian word",
        pairs: [
          { english: "7 (seven)", fijian: "vitu" },
          { english: "8 (eight)", fijian: "walu" },
          { english: "9 (nine)", fijian: "ciwa" },
          { english: "10 (ten)", fijian: "tini" }
        ],
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        id: "unit2-2",
        prompt: "What is the number 5 in Fijian?",
        choices: ["ono", "lima", "tini", "ciwa"],
        answer: 1,
        explanation: "'lima' = five. [1][7][8]",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "typing",
        id: "unit2-3",
        prompt: "Type the Fijian word for 'three'",
        answer: "tolu",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "sentence_builder",
        id: "unit2-4",
        prompt: "Build: 'One' (dua) + 'Ten' (tini) — 11 = tini kadua",
        words: ["dua", "tini"],
        answer: "tini dua",
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
    note: "Fijian pronouns encode person (I, you, he/she), number (singular, plural), and inclusivity (whether 'we' includes the listener). Subject pronouns are set words — 'au' means 'I', 'iko' means 'you', 'koya' means 'he/she'. The exclusive 'keirau' means 'we (not you)' while inclusive 'keda' means 'we (including you)'. Verbs follow the subject directly with no particle in between.",
    exercises: [
      {
        type: "matching",
        id: "unit3-1-a",
        prompt: "Match the pronoun to its meaning",
        pairs: [
          { english: "I / me", fijian: "au" },
          { english: "you (singular)", fijian: "iko" },
          { english: "he / she / him / her", fijian: "koya" },
          { english: "we (inclusive)", fijian: "keda" },
          { english: "we (exclusive)", fijian: "keirau" },
          { english: "you (plural/polite)", fijian: "kemuni" }
        ],
        sources: ["[2]", "[4]", "[5]"]
      },
      {
        type: "matching",
        id: "unit3-1-b",
        prompt: "Match the pronoun to its meaning",
        pairs: [
          { english: "they (plural)", fijian: "irato" }
        ],
        sources: ["[2]", "[4]", "[5]"]
      },
      {
        type: "multiple_choice",
        id: "unit3-2",
        prompt: "What does 'keirau' mean?",
        choices: ["we (inclusive)", "we (exclusive)", "they", "you (plural)"],
        answer: 1,
        explanation: "'keirau' = we exclusive (you and I, but not the person we're speaking to). 'keda' is inclusive (we and you). [2][4][5]",
        sources: ["[2]", "[4]", "[5]"]
      },
      {
        type: "sentence_builder",
        id: "unit3-3",
        prompt: "Build the phrase for 'I' + 'am going' (au lako)",
        words: ["au", "lako"],
        answer: "Au lako",
        note: "In Fijian, 'I am going' = 'Au lako'. The 'au' is the subject marker for 'I'. [1][9]",
        sources: ["[1]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit3-4",
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
        id: "unit4-1-a",
        prompt: "Match the Fijian family word to its English meaning",
        pairs: [
          { english: "family", fijian: "vuvale" },
          { english: "father", fijian: "tamaqu" },
          { english: "mother", fijian: "tinaqu" },
          { english: "son", fijian: "luvequ tagane" },
          { english: "daughter", fijian: "luvequ yalewa" },
          { english: "grandfather", fijian: "tukaqu" }
        ],
        sources: ["[6]"]
      },
      {
        type: "matching",
        id: "unit4-1-b",
        prompt: "Match the Fijian family word to its English meaning",
        pairs: [
          { english: "grandmother", fijian: "tubuqu" },
          { english: "brother", fijian: "ganequ" },
          { english: "sister", fijian: "taciqu" },
          { english: "grandchild", fijian: "makubuqu" }
        ],
        sources: ["[6]"]
      },
      {
        type: "multiple_choice",
        id: "unit4-2",
        prompt: "What is 'tinaqu' in English?",
        choices: ["father", "mother", "grandmother", "sister"],
        answer: 1,
        explanation: "Tinaqu means 'mother'. The '-qu' is a possessive suffix meaning 'my'. [6]",
        sources: ["[6]"]
      },
      {
        type: "sentence_builder",
        id: "unit4-3",
        prompt: "Build the sentence: 'My father' = Tata + -qu",
        words: ["tata", "noqu"],
        answer: "noqu tata",
        note: "Possession in Fijian: use 'noqu' (my) before the noun for general nouns. For family terms, the '-qu' suffix can also be used. [2][4]",
        sources: ["[2]", "[4]"]
      },
      {
        type: "typing",
        id: "unit4-4",
        prompt: "Type the Fijian word for 'brother'",
        answer: "ganequ",
        sources: ["[6]"]
      },
      {
        type: "multiple_choice",
        id: "unit4-5",
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
        id: "unit5-1-a",
        prompt: "Match the body part to its Fijian word",
        pairs: [
          { english: "head", fijian: "ulu" },
          { english: "eye", fijian: "mata" },
          { english: "nose", fijian: "ucu" },
          { english: "mouth", fijian: "gusu" },
          { english: "tooth", fijian: "bati" },
          { english: "tongue", fijian: "yame" }
        ],
        sources: ["[6]", "[7]", "[11]"]
      },
      {
        type: "matching",
        id: "unit5-1-b",
        prompt: "Match the body part to its Fijian word",
        pairs: [
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
        id: "unit5-2",
        prompt: "What does 'mata' mean?",
        choices: ["mouth", "eye", "ear", "head"],
        answer: 1,
        explanation: "'mata' = eye. [6][7][11]",
        sources: ["[6]", "[7]", "[11]"]
      },
      {
        type: "typing",
        id: "unit5-3",
        prompt: "Type the Fijian word for 'heart'",
        answer: "uto",
        sources: ["[6]", "[7]"]
      },
      {
        type: "sentence_builder",
        id: "unit5-4",
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
        id: "unit6-1-a",
        prompt: "Match the color to its Fijian word",
        pairs: [
          { english: "white", fijian: "vulavula" },
          { english: "black", fijian: "loaloa" },
          { english: "red", fijian: "damudamu" },
          { english: "blue", fijian: "karakarawa" },
          { english: "green", fijian: "drokadroka" },
          { english: "yellow", fijian: "dromodromo" }
        ],
        sources: ["[7]", "[12]"]
      },
      {
        type: "matching",
        id: "unit6-1-b",
        prompt: "Match the color to its Fijian word",
        pairs: [
          { english: "purple", fijian: "lokaloka" },
          { english: "orange", fijian: "seninawanawa" },
          { english: "brown", fijian: "masikuvui" },
          { english: "pink", fijian: "piqi" }
        ],
        sources: ["[7]", "[12]"]
      },
      {
        type: "multiple_choice",
        id: "unit6-2",
        prompt: "Which word means 'red'?",
        choices: ["loaloa", "damudamu", "karakarawa", "drokadroka"],
        answer: 1,
        explanation: "'damudamu' means red. Cross-verified from [7] and [12].",
        sources: ["[7]", "[12]"]
      },
      {
        type: "typing",
        id: "unit6-3",
        prompt: "Type the Fijian word for 'green'",
        answer: "drokadroka",
        sources: ["[7]", "[12]"]
      },
      {
        type: "sentence_builder",
        id: "unit6-4",
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
        id: "unit7-1-a",
        prompt: "Match the Fijian food word to its English",
        pairs: [
          { english: "food / eat", fijian: "kakana" },
          { english: "fish", fijian: "ika" },
          { english: "meat", fijian: "lewe" },
          { english: "taro", fijian: "dalo" },
          { english: "cassava", fijian: "tavioka" },
          { english: "coconut", fijian: "niu" }
        ],
        sources: ["[1]", "[6]", "[7]", "[8]"]
      },
      {
        type: "matching",
        id: "unit7-1-b",
        prompt: "Match the Fijian food word to its English",
        pairs: [
          { english: "water", fijian: "wai" },
          { english: "rice", fijian: "rais" },
          { english: "bread", fijian: "madrai" },
          { english: "coffee", fijian: "kofi" },
          { english: "tea", fijian: "ti" },
          { english: "beer", fijian: "bia" }
        ],
        sources: ["[1]", "[6]", "[7]", "[8]"]
      },
      {
        type: "matching",
        id: "unit7-1-c",
        prompt: "Match the Fijian food word to its English",
        pairs: [
          { english: "greens (Fijian spinach)", fijian: "bele" }
        ],
        sources: ["[1]", "[6]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        id: "unit7-2",
        prompt: "What does 'dalo' mean?",
        choices: ["cassava", "taro", "breadfruit", "coconut"],
        answer: 1,
        explanation: "Dalo is the Fijian word for taro, a staple root crop. [1][6][8]",
        sources: ["[1]", "[6]", "[8]"]
      },
      {
        type: "sentence_builder",
        id: "unit7-3",
        prompt: "Build: 'I eat' = Au + kana",
        words: ["au", "kana"],
        answer: "Au kana",
        note: "'kana' = eat (verb). 'Au kana' = I eat. [1][7]",
        sources: ["[1]", "[7]"]
      },
      {
        type: "typing",
        id: "unit7-4",
        prompt: "Type the Fijian word for 'water'",
        answer: "wai",
        sources: ["[1]", "[7]", "[8]"]
      },
      {
        type: "multiple_choice",
        id: "unit7-5",
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
        id: "unit8-1-a",
        prompt: "Match the question word to its meaning",
        pairs: [
          { english: "what", fijian: "cava" },
          { english: "who", fijian: "cei" },
          { english: "where / this place", fijian: "ko" },
          { english: "when", fijian: "naica" },
          { english: "how many / how much", fijian: "e vica" },
          { english: "how", fijian: "vakacava" }
        ],
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "matching",
        id: "unit8-1-b",
        prompt: "Match the question word to its meaning",
        pairs: [
          { english: "not", fijian: "sega ni" }
        ],
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit8-2",
        prompt: "Which word means 'what'?",
        choices: ["cei", "cava", "naica", "vakacava"],
        answer: 1,
        explanation: "'cava' = what. Remember C is pronounced 'th'. [1][5][8][9]",
        sources: ["[1]", "[5]", "[8]", "[9]"]
      },
      {
        type: "sentence_builder",
        id: "unit8-3",
        prompt: "Build: 'What is your name?' (O cei ko iko?)",
        words: ["o", "cei", "ko", "iko"],
        answer: "O cei ko iko?",
        note: "'O' is the subject marker, 'cei' = what/who, 'ko' = is/are, 'iko' = you. [8]",
        sources: ["[8]"]
      },
      {
        type: "typing",
        id: "unit8-4",
        prompt: "Type the Fijian word for 'how many'",
        answer: "e vica",
        sources: ["[1]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit8-5",
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
    note: "Fijian verbs (like 'kana' = eat, 'lako' = go, 'mai' = come) follow the subject pronoun directly — 'Au lako' means 'I go' with no particle between. The verb form is the dictionary form; tense is shown through markers like 'sa' (past) and 'e' (present habitual). For example, 'Au lako mai' means 'I am coming from' and 'Sa macala au' means 'I understood'.",
    exercises: [
      {
        type: "matching",
        id: "unit9-1-a",
        prompt: "Match the Fijian verb to its English meaning",
        pairs: [
          { english: "eat", fijian: "kana" },
          { english: "drink", fijian: "gunu" },
          { english: "go", fijian: "lako" },
          { english: "come", fijian: "mai" },
          { english: "see", fijian: "rai" },
          { english: "hear", fijian: "rogo" }
        ],
        sources: ["[1]", "[5]", "[7]", "[9]"]
      },
      {
        type: "matching",
        id: "unit9-1-b",
        prompt: "Match the Fijian verb to its English meaning",
        pairs: [
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
        id: "unit9-2",
        prompt: "Which verb means 'go'?",
        choices: ["mai", "lako", "kana", "rai"],
        answer: 1,
        explanation: "'lako' = go. 'mai' = come. Remember the 'c' in 'cakacaka' is 'th'. [1][7][9]",
        sources: ["[1]", "[7]", "[9]"]
      },
      {
        type: "sentence_builder",
        id: "unit9-3",
        prompt: "Build: 'I go' = Au + lako",
        words: ["au", "lako"],
        answer: "Au lako",
        note: "'Au' is the subject pronoun for 'I'. Verb follows subject. [1]",
        sources: ["[1]"]
      },
      {
        type: "typing",
        id: "unit9-4",
        prompt: "Type the Fijian verb for 'to hear/listen'",
        answer: "rogo",
        sources: ["[7]"]
      },
      {
        type: "multiple_choice",
        id: "unit9-5",
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
    note: "Fijian simple sentences follow a Subject-Verb structure. Pronouns like 'Au' (I), 'Iko' (you), and 'O koya' (he/she) come first, followed by the verb. For example, 'Au lako mai Niu Siladi' means 'I am from New Zealand' and 'O koya na qasenivuli' means 'He is a teacher' — here 'O' marks the proper subject, 'na' is the article 'the', and 'qasenivuli' is 'teacher'. Questions add 'e' or 'o' at the start, like 'E vica na isau?' (How much?) and 'O iko mai vei?' (Where are you from?).",
    exercises: [
      {
        type: "sentence_builder",
        id: "unit10-1",
        prompt: "Build: 'I am from New Zealand' (Au lako mai Niu Siladi)",
        words: ["au", "lako", "mai", "niu", "siladi"],
        answer: "Au lako mai Niu Siladi",
        note: "'Au' = I, 'lako mai' = come from, 'Niu Siladi' = New Zealand. [9]",
        sources: ["[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit10-2",
        prompt: "Which is the correct sentence for 'He is a teacher'?",
        choices: ["Au na qasenivuli", "O koya na qasenivuli", "O koya qasenivuli", "E koya na qasenivuli"],
        answer: 1,
        explanation: "'O koya na qasenivuli' = He is a teacher. 'O' marks the proper subject, 'koya' = he, 'na' = the, 'qasenivuli' = teacher. [5]",
        sources: ["[5]"]
      },
      {
        type: "matching",
        id: "unit10-3",
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
        id: "unit10-4",
        prompt: "Type the Fijian for: 'Where are you from?'",
        answer: "o iko mai vei",
        sources: ["[1]", "[5]", "[9]"]
      },
      {
        type: "multiple_choice",
        id: "unit10-5",
        prompt: "What does 'Au sega ni kila' mean?",
        choices: ["I understand", "I don't understand", "I am from", "I am hungry"],
        answer: 1,
        explanation: "'Au sega ni kila' = I don't understand. 'sega' = not, 'kila' = know/understand. [8]",
        sources: ["[8]"]
      }
    ]
  },

  "unit11": {
    title: "Animals",
    description: "Learn animal vocabulary — manumanu, ika, kolī, gata, and more",
    xp: 110,
    skills: [11],
    exercises: [
      {
        type: "matching",
        id: "unit11-1",
        prompt: "Match the Fijian animal to its English meaning",
        pairs: [
          { english: "animal", fijian: "manumanu" },
          { english: "fish", fijian: "ika" },
          { english: "bird", fijian: "manumanuvuka" },
          { english: "dog", fijian: "kolī" },
          { english: "snake", fijian: "gata" },
          { english: "worm", fijian: "baca ni qele" }
        ],
        sources: ["[7]", "[10]"]
      },
      {
        type: "multiple_choice",
        id: "unit11-2",
        prompt: "What does 'kolī' mean?",
        choices: ["snake", "dog", "bird", "fish"],
        answer: 1,
        explanation: "'Koli' = dog. Note the plural form is 'kolī'. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "multiple_choice",
        id: "unit11-3",
        prompt: "Which animal is 'gata'?",
        choices: ["dog", "snake", "bird", "fish"],
        answer: 1,
        explanation: "'Gata' = snake. Note: 101 Languages [7] lists 'gata' as 'sharp (as a knife)', but Glosbe [10] confirms 'gata' = snake. The 101 Languages listing appears to be a row error. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "typing",
        id: "unit11-4",
        prompt: "Type the Fijian word for 'fish'",
        answer: "ika",
        sources: ["[7]", "[10]"]
      },
      {
        type: "sentence_builder",
        id: "unit11-5",
        prompt: "Build the phrase: 'a big dog' = kolī + levu",
        words: ["kolī", "levu"],
        answer: "kolī levu",
        note: "In Fijian, adjectives follow nouns: 'kolī levu' = big dog (noun + adjective order, consistent with Units 12-13). [7][10]",
        sources: ["[7]", "[10]"]
      }
    ]
  },

  "unit12": {
    title: "Nature & Weather",
    description: "Learn about the sun, moon, stars, water, rain, and seasons",
    xp: 120,
    skills: [12],
    exercises: [
      {
        type: "matching",
        id: "unit12-1-a",
        prompt: "Match the Fijian nature word to its English meaning",
        pairs: [
          { english: "sun / day", fijian: "siga" },
          { english: "moon", fijian: "vula" },
          { english: "star", fijian: "kalokalo" },
          { english: "water", fijian: "wai" },
          { english: "rain", fijian: "uca" },
          { english: "river", fijian: "uciwai" }
        ],
        sources: ["[7]"]
      },
      {
        type: "matching",
        id: "unit12-1-b",
        prompt: "Match the Fijian nature word to its English meaning",
        pairs: [
          { english: "sea", fijian: "waitui" },
          { english: "cloud", fijian: "ō" },
          { english: "wind", fijian: "cagi" },
          { english: "fire", fijian: "kama" },
          { english: "night", fijian: "bogi" },
          { english: "year", fijian: "yabaki" }
        ],
        sources: ["[7]"]
      },
      {
        type: "multiple_choice",
        id: "unit12-2",
        prompt: "Which word means both 'sun' and 'day'?",
        choices: ["vula", "siga", "kalokalo", "bogi"],
        answer: 1,
        explanation: "'Siga' means both 'sun' and 'day' in Fijian. This is common in Austronesian languages — the same word for the celestial body and the time period. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "multiple_choice",
        id: "unit12-3",
        prompt: "What is 'vula' in English?",
        choices: ["sun", "moon", "star", "cloud"],
        answer: 1,
        explanation: "'Vula' = moon. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "typing",
        id: "unit12-4",
        prompt: "Type the Fijian word for 'rain'",
        answer: "uca",
        sources: ["[7]"]
      },
      {
        type: "sentence_builder",
        id: "unit12-5",
        prompt: "Build: 'the big sun' = siga + levu",
        words: ["siga", "levu"],
        answer: "siga levu",
        note: "'Siga levu' = big sun / shining sun. In Fijian, modifiers follow the noun. [7]",
        sources: ["[7]"]
      }
    ]
  },

  "unit13": {
    title: "Descriptive Adjectives",
    description: "Learn adjectives — big, small, long, short, new, old, and more",
    xp: 120,
    skills: [13],
    exercises: [
      {
        type: "matching",
        id: "unit13-1-a",
        prompt: "Match the Fijian adjective to its English meaning",
        pairs: [
          { english: "big / many", fijian: "levu" },
          { english: "small", fijian: "lailai" },
          { english: "long / tall", fijian: "balavu" },
          { english: "short", fijian: "leka" },
          { english: "wide", fijian: "rabalevu" },
          { english: "narrow", fijian: "rabalailai" }
        ],
        sources: ["[7]"]
      },
      {
        type: "matching",
        id: "unit13-1-b",
        prompt: "Match the Fijian adjective to its English meaning",
        pairs: [
          { english: "heavy", fijian: "bībī" },
          { english: "thin (person)", fijian: "lila" },
          { english: "good", fijian: "vinaka" },
          { english: "bad", fijian: "cā" },
          { english: "new", fijian: "vou" },
          { english: "old (person)", fijian: "qase" }
        ],
        sources: ["[7]"]
      },
      {
        type: "multiple_choice",
        id: "unit13-2",
        prompt: "Which word means 'big'?",
        choices: ["lailai", "levu", "balavu", "leka"],
        answer: 1,
        explanation: "'Levu' = big or many. In Fijian, 'levu' can be used as both an adjective and a verb: 'na gone levu' (the big child), 'e dua na levu' (there are many). [7][2]",
        sources: ["[7]", "[2]"]
      },
      {
        type: "multiple_choice",
        id: "unit13-3",
        prompt: "How do you say 'new' in Fijian?",
        choices: ["vou", "qase", "makawa", "vinaka"],
        answer: 0,
        explanation: "'Vou' = new. 'Qase' means 'old' (for people), 'makawa' means 'old' (for things). [7]",
        sources: ["[7]"]
      },
      {
        type: "typing",
        id: "unit13-4",
        prompt: "Type the Fijian word for 'good'",
        answer: "vinaka",
        sources: ["[7]"]
      },
      {
        type: "sentence_builder",
        id: "unit13-5",
        prompt: "Build: 'good water' = wai + vinaka",
        words: ["wai", "vinaka"],
        answer: "wai vinaka",
        note: "'Wai vinaka' = good water. In Fijian, the modifier follows the noun: '[noun] [adjective]'. [7]",
        sources: ["[7]"]
      }
    ]
  },

  "unit14": {
    title: "Expanded Verbs",
    description: "Learn action verbs — swim, fly, walk, sit, stand, give, hold, and more",
    xp: 130,
    skills: [14],
    exercises: [
      {
        type: "matching",
        id: "unit14-1-a",
        prompt: "Match the Fijian verb phrase to its English meaning",
        pairs: [
          { english: "to swim", fijian: "qalo-va" },
          { english: "to fly", fijian: "vuka" },
          { english: "to walk", fijian: "taubale" },
          { english: "to come", fijian: "lako mai" },
          { english: "to sit", fijian: "dabe" },
          { english: "to stand", fijian: "tū" }
        ],
        sources: ["[7]", "[10]"]
      },
      {
        type: "matching",
        id: "unit14-1-b",
        prompt: "Match the Fijian verb phrase to its English meaning",
        pairs: [
          { english: "to give", fijian: "soli-a" },
          { english: "to hold", fijian: "taura" },
          { english: "to throw", fijian: "viri-taka" },
          { english: "to sing", fijian: "laga-ta" },
          { english: "to see", fijian: "rai-ca" },
          { english: "to hear", fijian: "rogo-ca" }
        ],
        sources: ["[7]", "[10]"]
      },
      {
        type: "matching",
        id: "unit14-1-c",
        prompt: "Match the Fijian verb phrase to its English meaning",
        pairs: [
          { english: "to know", fijian: "kilā" },
          { english: "to think", fijian: "nanuma" },
          { english: "to fear", fijian: "rere-vaka" }
        ],
        sources: ["[7]", "[10]"]
      },
      {
        type: "multiple_choice",
        id: "unit14-2",
        prompt: "Which verb means 'to swim'?",
        choices: ["dabe", "qalo-va", "taubale", "vuka"],
        answer: 1,
        explanation: "'Qalo-va' = to swim. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "multiple_choice",
        id: "unit14-3",
        prompt: "How do you say 'to come' in Fijian?",
        choices: ["lako", "mai", "lako mai", "vuka"],
        answer: 2,
        explanation: "'Lako mai' = to come. 'Mai' alone means 'come here', but 'lako mai' is the full verb 'to come/go to'. Glosbe confirms 'lako mai' = come. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "typing",
        id: "unit14-4",
        prompt: "Type the Fijian verb for 'to stand'",
        answer: "tū",
        altAnswers: ["tūcake"],
        note: "Also accepts 'tūcake' for 'stand up'. [7][10]",
        sources: ["[7]", "[10]"]
      },
      {
        type: "sentence_builder",
        id: "unit14-5",
        prompt: "Build: 'I am going' = au + lako",
        words: ["au", "lako"],
        answer: "Au lako",
        note: "'Au' is the subject pronoun for 'I'. The verb 'lako' means go/come. Combined as 'Au lako' = I am going. [7][10]",
        sources: ["[7]", "[10]"]
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
  },
  {
    id: "unit11",
    title: "Animals",
    description: "Learn animal vocabulary — manumanu, ika, kolī, gata, and more",
    icon: "🐾",
    xp: 110,
    prerequisites: ["unit5"],
    unlocked: false
  },
  {
    id: "unit12",
    title: "Nature & Weather",
    description: "Learn about the sun, moon, stars, water, rain, and seasons",
    icon: "🌤️",
    xp: 120,
    prerequisites: ["unit6"],
    unlocked: false
  },
  {
    id: "unit13",
    title: "Adjectives",
    description: "Learn descriptive adjectives — big, small, long, short, new, old",
    icon: "📏",
    xp: 120,
    prerequisites: ["unit9"],
    unlocked: false
  },
  {
    id: "unit14",
    title: "Expanded Verbs",
    description: "Learn action verbs — swim, fly, walk, sit, stand, give, hold, throw",
    icon: "🏊",
    xp: 130,
    prerequisites: ["unit9"],
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