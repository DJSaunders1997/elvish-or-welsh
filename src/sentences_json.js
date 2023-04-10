/**
 * sentences_json.js
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
  }
]
`
// Creates an array of documents
const sentences = JSON.parse(json_string);

/**
 * Shuffles an array in-place using the Fisher-Yates algorithm.
 * @param {Array} array - The array to shuffle.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle sentences and export shuffled array
shuffleArray(sentences)

export { sentences };
