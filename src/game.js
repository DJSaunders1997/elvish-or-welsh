/**
 * Game class that combines both game logic and UI updates.
 * 
 * TODOs:
 * - split check answer into a purely game function, and ui function
 * - create method to update ui element
 * - create sentences as its own class, so we can do stuff like 
 *      sentences.nextSentence and not have to keep track of state ourself
 * - FUTURE: Add correct / incorrect display to seperate box
 */
export default class Game {

    /**
     * Sets up the initial state of the game.
     * Initilises initial score and sentence index, and stores reference to DOM elements.
     * @param {Array} sentences - The array of sentences.
     * @param {HTMLElement} scoreEl - The DOM element for displaying the player's score.
     * @param {HTMLElement} sentenceEl - The DOM element for displaying the current sentence.
     */
    constructor(sentences, scoreEl, sentenceEl) {
        this.currentSentenceIndex = 0; // Keep track of the index of the current sentence being displayed
        this.score = 0; // Keep track of the player's current score
    
        this.sentences = sentences; // TODO: Move sentences to own object, or read in here
    
        this.sentenceEl = sentenceEl;
        this.scoreEl = scoreEl;

        // Update sentence element with current sentence
        this.sentenceEl.textContent = this.sentences[this.currentSentenceIndex].text;
    }
    

    /**
     * This method checks whether the player's answer is correct and updates the score and current sentence accordingly.
     * @param {string} answer - The player's answer, either "Elvish" or "Welsh".
     */
    checkAnswer(answer) {
        console.log("Checking answer...");

        // Check if the player's answer is correct
        if (answer === this.sentences[this.currentSentenceIndex].language) {
            // If the answer is correct, increase the player's score by 1 and display a message to the player
            this.score++;
            this.scoreEl.textContent = this.score;
            this.sentenceEl.textContent = "Correct!";
        } else {
            // If the answer is wrong, display a message to the player
            this.sentenceEl.textContent = "Wrong!";
        }

        // Move on to the next sentence
        // TOdo move to own method or class
        this.currentSentenceIndex++;

        // If we have reached the end of the sentences, loop back to the beginning
        if (this.currentSentenceIndex >= this.sentences.length) {
            this.currentSentenceIndex = 0;
        }

        // Display the next sentence after a delay of 1 second
        setTimeout(() => {
            this.sentenceEl.textContent = this.sentences[this.currentSentenceIndex].text;
        }, 1000);
    }
}
