/**
 * app.js
 * This file initializes the game UI, including selecting elements,
 * updating the font style, and displaying the first sentence.
 * It also sets up an event listener for switching font styles.
 */

import { SentenceManager ,json_string } from './sentences.js';
import Game from './game.js';
import UI from './ui.js';

console.log("Setting up JS application");

let ui = new UI();
let sentenceManager = new SentenceManager(json_string);
let game = new Game(sentenceManager, ui);

// Make function available in the global scope
// Used by the Elvish, Welsh and Next Question buttons in index.html
window.checkAnswer = (answer) => game.checkAnswer(answer);
window.showNextQuestion = () => game.showNextQuestion();