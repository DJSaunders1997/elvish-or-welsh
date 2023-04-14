/**
 * Game class that combines both game logic and UI updates.
 * 
 * TODOs:
 * - split check answer into a purely game function, and ui function
 * - create method to update ui element
 * - FUTURE: Add correct / incorrect display to separate box
 */

// Imports used for JSDocs
import { SentenceManager } from './sentences.js';
import UI from './ui.js';

export default class Game {

    /**
     * Sets up the initial state of the game.
     * Initilises initial score and sentence index, and stores reference to DOM elements.
     * @param {SentenceManager} sentenceManager - An instance of the sentenceManager class.
     * @param {UI} ui - Object to manage and update UI.
     */
    constructor(sentenceManager, ui) {
        this.score = 0; // Keep track of the player's current score
        this.sentenceManager = sentenceManager

        this.ui = ui;
        // Update sentence element with current sentence
        this.ui.updateSentence( sentenceManager.getSentence().text );
    }
    

    /**
     * This method checks whether the player's answer is correct and updates the score and current sentence accordingly.
     * @param {string} answer - The player's answer, either "Elvish" or "Welsh".
     */
    checkAnswer(answer) {
        console.log("Checking answer...");
        console.log("Current sentence:" + this.sentenceManager.getSentence())

        // Check if the player's answer is correct
        if (answer === this.sentenceManager.getSentence().language) {
            // If the answer is correct, increase the player's score by 1 and display a message to the player
            this.score++;
            this.ui.updateScore( this.score );
            var result = "Correct!"
        } else {
            // If the answer is wrong, display a message to the player
            var result = "Wrong!"
        }

        this.ui.updateSentence(result)

        // Move on to the next sentence
        this.sentenceManager.nextSentence();

        this.ui.flashResult(result, this.sentenceManager.getSentence().text)
    }
}