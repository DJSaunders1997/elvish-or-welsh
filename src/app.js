/**
 * app.js
 * This file initializes the game UI, including selecting elements,
 * updating the font style, and displaying the first sentence.
 * It also sets up an event listener for switching font styles.
 */

import { sentences } from './sentences_json.js';
import { checkAnswer, updateFontStyle } from './gameLogic.js';

// Define global variables
let sentenceEl, switchStyleElement, scoreEl; // HTML elements.
let isCursive; // Cursive state.

let currentSentenceIndex, score; // Game variables.

/**
 * Sets up the HTML elements for displaying the current sentence and player score.
 */
function setupElements() {
  sentenceEl = document.querySelector('#sentence');
  switchStyleElement = document.querySelector('#switch-style');
  scoreEl = document.querySelector('#score');

  // Update sentence element with current sentence
  sentenceEl.textContent = sentences[currentSentenceIndex].text;

  // Make function available in the global scope
  // Used by the Elvish and Welsh buttons in index.html
  window.checkAnswer = checkAnswer;
}

/**
 * Initialises the cursive state and sets up an event listener for switching font styles.
 */
function setupCursive() {
  // Initialise var to keep track of cursive state 
  isCursive = false;
  updateFontStyle();

  switchStyleElement.addEventListener('click', () => {
    console.log("isCursive updated to:");
    console.log(isCursive);
    updateFontStyle();
  });
}

/**
 * Sets up the initial state of the game.
 */
function setupGame() {
  currentSentenceIndex = 0; // Keep track of the index of the current sentence being displayed
  score = 0; // Keep track of the player's current score
}

/**
 * Calls all setup functions to initialize the game.
 */
function setupAll() {
  console.log("Setting up JS application");

  setupGame();
  setupElements();
  setupCursive();
}

setupAll();
