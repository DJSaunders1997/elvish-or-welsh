/**
 * Cursive class that combines both game logic and UI updates for toggling
 * between cursive and block text font styles.
 * Export as default as this is the only item we want from this script.
 */
export default class Cursive {
    /**
     * Initialises the cursive state and sets up an event listener for switching font styles.
     * @param {HTMLElement} sentenceElement - The HTML element displaying the sentence.
     * @param {HTMLElement} switchStyleElement - The HTML element used to switch font styles.
     */
    constructor(sentenceElement, switchStyleElement) {
  
      // Initialize the isCursive variable
      this.isCursive = false;
  
      // Store references to the HTML elements and event listener
      this.sentenceElement = sentenceElement;
      this.switchStyleElement = switchStyleElement;
      this.setupEventListeners();
  
      // Update the font style initially
      this.updateFontStyle();
    }
  
    /**
     * Set up the event listeners for the game.
     */
    setupEventListeners() {
      this.switchStyleElement.addEventListener("click", () => {
        // Toggle the isCursive state
        this.isCursive = !this.isCursive;
  
        // Update the font style
        this.updateFontStyle();
      });
    }
  
    /**
     * Update the font style based on the isCursive state.
     */
    updateFontStyle() {
      if (this.isCursive) {
        this.sentenceElement.style.fontFamily = "Dancing Script";
        this.switchStyleElement.textContent = "(Switch to block text)";
      } else {
        this.sentenceElement.style.fontFamily = "inherit";
        this.switchStyleElement.textContent = "(Switch to cursive text)";
      }
    }
  }