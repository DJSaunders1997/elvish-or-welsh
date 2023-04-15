// ui.js
export default class UI {
  /**
   * Initializes the UI class.
   * Sets up the HTML elements for displaying the current sentence and player score.
   * Contains Cursive functionality for toggling between cursive and block text font styles.
   */
  constructor() {
    this.sentenceEl = document.querySelector("#sentence"); // DOM element for displaying the current sentence.
    this.switchStyleEl = document.querySelector("#switch-style"); // DOM element for switching fonts.
    this.scoreEl = document.querySelector("#score"); //DOM element for displaying the player's score.

    // Initialize the Cursive variable
    this.isCursive = false;
    this.setupCursiveEventListeners();
    this.updateFontStyle(); // Update the font style initially
  }

  /**
   * Set up the event listeners for switching to cursive.
   * * @private
   */
  setupCursiveEventListeners() {
    this.switchStyleEl.addEventListener("click", () => {
      // Toggle the isCursive state
      this.isCursive = !this.isCursive;

      // Update the font style
      this.updateFontStyle();
    });
  }

  /**
   * Updates the displayed sentence.
   * @param {string} text - The text to be displayed.
   */
  updateSentence(text) {
    this.sentenceEl.textContent = text;
  }

  /**
   * Updates the displayed score.
   * @param {string} text - The text to be displayed.
   */
  updateScore(text) {
    this.scoreEl.textContent = text;
  }

  /**
   * Flash result and display the next sentence after a delay of 1 second
   * @param {string} result - The text to be displayed immediately.
   * @param {string} result - The text to be displayed after a 1 second delay.
   */
  flashResult(result, sentence) {
    // Show result immediately
    this.updateSentence(result);

    // Update to next sentence after 1 second
    setTimeout(() => {
      this.updateSentence(sentence);
    }, 1000);
  }

  /**
   * Update the font style based on the isCursive state.
   */
  updateFontStyle() {
    if (this.isCursive) {
      this.sentenceEl.style.fontFamily = "Dancing Script";
      this.switchStyleEl.textContent = "(Switch to block text)";
    } else {
      this.sentenceEl.style.fontFamily = "inherit";
      this.switchStyleEl.textContent = "(Switch to cursive text)";
    }
  }
} 