/**
 * sentences.js
 * This file contains a JSON string of sentences in Elvish and Welsh,
 * a function to shuffle an array, and an export of the shuffled sentences array.
 * The JSON string is used instead of an actual .json file due to the difficulty
 * in reading .json files in vanilla JavaScript.
 */

const json_string = `
[
  {
    "text": "Annon edhellen, edro hi ammen!",
    "language": "Elvish",
    "translation": "I will speak Elvish, go now!"
  },
  {
    "text": "Croeso i Gymru, y wlad ryfeddol hon.",
    "language": "Welsh",
    "translation": "Welcome to Wales, this wonderful country."
  },
  {
    "text": "Galu!",
    "language": "Elvish",
    "translation": "A cry of defiance or challenge"
  },
  {
    "text": "Mae hi'n bwrw glaw yn y Gogledd heddiw.",
    "language": "Welsh",
    "translation": "It's raining in the North today."
  },
  {
    "text": "A Elbereth Gilthoniel, o menel palan-diriel...",
    "language": "Elvish",
    "translation": "Oh Elbereth Starkindler, from heaven gazing afar..."
  },
  {
    "text": "Lleucu Llwyd oedd enw'r ferch.",
    "language": "Welsh",
    "translation": "Lleucu Llwyd was the girl's name."
  },
  {
    "text": "Mae dafad ddu ym mydd mynydd.",
    "language": "Welsh",
    "translation": "There are black sheep in the middle of the mountain."
  },
  {
    "text": "Im mîl bennin blathaon.",
    "language": "Elvish",
    "translation": "In a land of kings, beautiful flowers."
  },
  {
    "text": "I vethed, i chuiannen!",
    "language": "Elvish",
    "translation": "To the end, to victory!"
  },
  {
    "text": "Gwnewch y pethau bychain",
    "language": "Welsh",
    "translation": "Do the little things"
  },
  {
    "text": "Hîdh ab 'wanath!",
    "language": "Elvish",
    "translation": "No harm to you!"
  },
  {
    "text": "Mae'r haul yn disgleirio ar y ddaear heddiw.",
    "language": "Welsh",
    "translation": "The sun is shining on the earth today."
  },
  {
    "text": "I elenath! Mellyn!",
    "language": "Elvish",
    "translation": "To the elves! Friends!"
  },
  {
    "text": "Dw i'n hoffi coffi poeth.",
    "language": "Welsh",
    "translation": "I like hot coffee."
  },
  {
    "text": "A Elbereth! Gilthoniel!",
    "language": "Elvish",
    "translation": "Oh Elbereth! Starkindler!"
  },
  {
    "text": "Mae'r afon yn llawn pysgod.",
    "language": "Welsh",
    "translation": "The river is full of fish."
  },
  {
    "text": "Ae Adar nín, i vethed uin.",
    "language": "Elvish",
    "translation": "Oh our birds, to the end of the world."
  },
  {
    "text": "Cymru am byth!",
    "language": "Welsh",
    "translation": "Wales forever!"
  },
  {
    "text": "Aiya Eärendil Elenion Ancalima!",
    "language": "Elvish",
    "translation": "Hail Eärendil, brightest of stars!"
  },
  {
    "text": "Rydyn ni'n mynd i'r parc heddiw.",
    "language": "Welsh",
    "translation": "We're going to the park today."
  },
  {
    "text": "Sîdh-i-Daearon!",
    "language": "Elvish",
    "translation": "Peace on Earth!"
  },
  {
    "text": "Mae'n flin gen i, dw i ddim yn siarad Cymraeg yn dda iawn.",
    "language": "Welsh",
    "translation": "I'm sorry, I don't speak Welsh very well."
  },
  {
    "text": "A Elbereth! Gilthoniel! A! Elbereth!",
    "language": "Elvish",
    "translation": "Oh Elbereth! Starkindler! Oh! Elbereth!"
  },
  {
    "text": "Dwi'n caru'r hen iaith Gymraeg.",
    "language": "Welsh",
    "translation": "I love the old Welsh language."
  },
  
  {
    "text": "Mae'r dail yn disgyn o'r coed.",
    "language": "Welsh",
    "translation": "The leaves are falling from the trees."
  },
  {
    "text": "Mae'r seren wedi codi.",
    "language": "Welsh",
    "translation": "The star has risen."
  },
  {
    "text": "Nin o Chithaeglir lasto beth daer: Rimmo nin Bruinen dan in Ulaer!",
    "language": "Elvish",
    "translation": "From the Great River to the last shore: in Bruinen let the Ringwraiths drown!"
  },
  {
    "text": "Rhyfelwyr mewn gwisg aur a gwyn.",
    "language": "Welsh",
    "translation": "Warriors in gold and white attire."
  },
  {
    "text": "Noro lim, noro lim, Asfaloth!",
    "language": "Elvish",
    "translation": "Ride swift, ride swift, Asfaloth!"
  },
  {
    "text": "Llwybrau wedi'u gorchuddio â dail.",
    "language": "Welsh",
    "translation": "Paths covered with leaves."
  },
  {
    "text": "Pedo mellon a minno.",
    "language": "Elvish",
    "translation": "Speak, friend, and enter."
  },
  {
    "text": "Clywch y geiriau o'r coedwig tywyll.",
    "language": "Welsh",
    "translation": "Hear the words from the dark forest."
  },
  {
    "text": "Auta i lómë! Aurë entuluva!",
    "language": "Elvish",
    "translation": "The night is passing! Day shall come again!"
  },
  {
    "text": "Yma yw'r cysgodion yn cwympo.",
    "language": "Welsh",
    "translation": "Here the shadows are falling."
  },
  {
    "text": "Le melon",
    "language": "Elvish",
    "translation": "I love you"
  },
  {
    "text": "Dw i'n hoffi teithio.",
    "language": "Welsh",
    "translation": "I like to travel."
  },
  {
    "text": "Namarie!",
    "language": "Elvish",
    "translation": "Farewell!"
  },
  {
    "text": "Fy hoff lyfr yw Harry Potter.",
    "language": "Welsh",
    "translation": "My favorite book is Harry Potter."
  },
  {
    "text": "Galad, i mae adar.",
    "language": "Elvish",
    "translation": "Light, the birds are singing."
  },
  {
    "text": "Dw i'n byw yng Nghaerdydd.",
    "language": "Welsh",
    "translation": "I live in Cardiff."
  },
  {
    "text": "Yána yulma, úpoles rato.",
    "language": "Elvish",
    "translation": "Long journey, the wheel does not roll."
  },
  {
    "text": "Dw i'n dysgu Cymraeg.",
    "language": "Welsh",
    "translation": "I'm learning Welsh."
  },
  {
    "text": "Nienna, anannalye.",
    "language": "Elvish",
    "translation": "Nienna, I understand."
  },
  {
    "text": "Mae'r tywydd yn oer heddiw.",
    "language": "Welsh",
    "translation": "The weather is cold today."
  }
]
`

/**
 * sentenceManager class that handles sentence management.
 */
class SentenceManager {
  /**
   * Sets up the initial state of the Sentences class.
   * @param {string} json_string - The JSON string containing the sentences.
   */
  constructor(json_string) {
    this.sentences = JSON.parse(json_string); // Creates an array of documents from json_string
    this.currentSentenceIndex = 0;
    this.shuffleArray();
    this.currentSentence = this.sentences[this.currentSentenceIndex];
  }

  /**
   * Shuffles an array in-place using the Fisher-Yates algorithm.
   * @private
   */
  shuffleArray() {
    for (let i = this.sentences.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.sentences[i], this.sentences[j]] = [this.sentences[j], this.sentences[i]];
    }
  }

  /**
 * Returns the current sentence.
 * @returns {Object} The current sentence object.
 */
  getSentence() {
    return this.currentSentence
  }

  /**
   * Updates the current sentence and index.
   */
  nextSentence() {

    this.currentSentenceIndex++;
    this.currentSentence = this.sentences[this.currentSentenceIndex];

    // If we've been through all sentences, then reset index and reshuffle
    if (this.currentSentenceIndex >= this.sentences.length) {
      this.currentSentenceIndex = 0;
      this.shuffleArray();
    }
  }
}

// const sentences = new sentenceManager(json_string);

// Export Class and string here so it can be instantiates in app.js for visibility
export { SentenceManager, json_string };
