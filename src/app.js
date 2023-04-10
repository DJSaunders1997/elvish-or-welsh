/**
 * app.js
 * This file initializes the game UI, including selecting elements,
 * updating the font style, and displaying the first sentence.
 * It also sets up an event listener for switching font styles.
 */


import { sentences } from './sentences_json.js'
console.log("Starting js file")

// Keep track of the index of the current sentence being displayed
let currentSentenceIndex = 0;

// Keep track of the player's current score
let score = 0;

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

shuffleArray(sentences)

// Select the HTML elements for displaying the current sentence and player score
const sentenceEl = document.querySelector('#sentence');
const switchStyleElement = document.querySelector('#switch-style'); // Add this line
const scoreEl = document.querySelector('#score');

// This function checks whether the player's answer is correct and updates the score and current sentence accordingly
function checkAnswer(answer) {

  // Check if the player's answer is correct
  if (answer === sentences[currentSentenceIndex].language) {
    // If the answer is correct, increase the player's score by 1 and display a message to the player
    score++;
    scoreEl.textContent = score;
    sentenceEl.textContent = "Correct!";
  } else {
    // If the answer is wrong, display a message to the player
    sentenceEl.textContent = "Wrong!";
  }

  // Move on to the next sentence
  currentSentenceIndex++;

  // If we have reached the end of the sentences, loop back to the beginning
  if (currentSentenceIndex >= sentences.length) {
    currentSentenceIndex = 0;
  }

  // Display the next sentence after a delay of 1 second
  setTimeout(() => {
    sentenceEl.textContent = sentences[currentSentenceIndex].text;
  }, 1000);
}

// Display the first sentence
sentenceEl.textContent = sentences[currentSentenceIndex].text;

// Make function available in the global scope
window.checkAnswer = checkAnswer;


var isCursive = false;

/**
 * Toggles the font style of the sentence element between cursive and block text
 * and updates the text content of the switchStyleElement accordingly.
 */
function updateFontStyle() {
  if (isCursive) {
    sentenceEl.style.fontFamily = 'Dancing Script';
    switchStyleElement.textContent = '(Switch to block text)';
    isCursive = false;
  } else {
    sentenceEl.style.fontFamily = 'inherit';
    switchStyleElement.textContent = '(Switch to cursive text)';
    isCursive = true;
  }
}

updateFontStyle()

switchStyleElement.addEventListener('click', () => {
  console.log("isCursive updated to:")
  console.log(isCursive)
  updateFontStyle()
});