/**
 * Game class that combines both game logic and UI updates.
 * 
 * TODOs:
 * - split check answer into a purely game function, and ui function
 * - create method to update ui element
 * - FUTURE: Add correct / incorrect display to separate box
 */

import { SentenceManager } from './sentences.js';

export default class Game {

    /**
     * Sets up the initial state of the game.
     * Initilises initial score and sentence index, and stores reference to DOM elements.
     * @param {SentenceManager} sentenceManager - An instance of the sentenceManager class.
     * @param {HTMLElement} scoreEl - The DOM element for displaying the player's score.
     * @param {HTMLElement} sentenceEl - The DOM element for displaying the current sentence.
     */
    constructor(sentenceManager, scoreEl, sentenceEl) {
        this.score = 0; // Keep track of the player's current score
    
        this.sentenceManager = sentenceManager;
    
        this.sentenceEl = sentenceEl;
        this.scoreEl = scoreEl;

        // Update sentence element with current sentence
        this.sentenceEl.textContent = sentenceManager.getSentence().text;
    }
    

    /**
     * This method checks whether the player's answer is correct and updates the score and current sentence accordingly.
     * @param {string} answer - The player's answer, either "Elvish" or "Welsh".
     */
    checkAnswer(answer) {
        console.log("Checking answer...");

        // Check if the player's answer is correct
        if (answer === this.sentenceManager.getSentence().language) {
            // If the answer is correct, increase the player's score by 1 and display a message to the player
            this.score++;
            this.scoreEl.textContent = this.score;
            this.sentenceEl.textContent = "Correct!";
        } else {
            // If the answer is wrong, display a message to the player
            this.sentenceEl.textContent = "Wrong!";
        }

        // Move on to the next sentence
        this.sentenceManager.nextSentence();

        // Display the next sentence after a delay of 1 second
        setTimeout(() => {
            this.sentenceEl.textContent = this.sentenceManager.getSentence().text;
        }, 1000);
    }
}
