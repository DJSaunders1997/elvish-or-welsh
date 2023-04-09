// Creating json as string rather than as an actual .json file 
//  because it's next to impossible to read in a .json file in raw js. 

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
  }
]
`
// Creates an array of documents
const sentences = JSON.parse(json_string);
export { sentences };
