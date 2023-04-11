/**
 * app.js
 * This file initializes the game UI, including selecting elements,
 * updating the font style, and displaying the first sentence.
 * It also sets up an event listener for switching font styles.
 */

import { sentences } from './sentences_json.js';
import Cursive from './cursive.js';
import Game from './game.js';

/**
 * Sets up the HTML elements for displaying the current sentence and player score.
 */
function setupElements() {
  const sentenceEl = document.querySelector('#sentence');
  const switchStyleElement = document.querySelector('#switch-style');
  const scoreEl = document.querySelector('#score');

  // Return the elements needed for switching to cursive functionality
  return { sentenceEl, switchStyleElement, scoreEl };
}

/**
 * Call all setup functions to initialize the game.
 */

console.log("Setting up JS application");

const { sentenceEl, switchStyleElement, scoreEl } = setupElements();

let cursive = new Cursive(sentenceEl, switchStyleElement);
let game = new Game(sentences, scoreEl, sentenceEl);

// Make function available in the global scope
// Used by the Elvish and Welsh buttons in index.html
window.checkAnswer = (answer) => game.checkAnswer(answer);