// ui.js

/**
 * UI class for handling user interface interactions.
 */
export default class UI {
  /**
   * Initializes the UI class.
   * Sets up the HTML elements for displaying the current sentence and player score.
   * Contains functionality for toggling between cursive and block text font styles.
   */
  constructor() {
    this.scoreElement = document.querySelector("#score");
    this.questionDiv = document.getElementById("questionDiv");
    this.sentenceElement = document.querySelector("#sentence");
    this.switchStyleElement = document.querySelector("#switch-style");
    
    // Answer Div contains result, translation, and next question button
    this.answerDiv = document.getElementById("answerDiv");
    this.resultElement = document.getElementById("result");
    this.translationElement = document.getElementById("translation");
    
    // Initialize the Cursive variable
    this.isCursive = true;
    this.setupCursiveEventListeners();
    this.updateFontStyle(); // Update the font style initially
  }

  /**
   * Sets up the event listeners for switching to cursive.
   * @private
   */
  setupCursiveEventListeners() {
    this.switchStyleElement.addEventListener("click", () => {
      this.isCursive = !this.isCursive;
      this.updateFontStyle();
    });
  }

  /**
   * Updates the displayed sentence.
   * @param {string} text - The text to be displayed.
   */
  updateSentence(text) {
    this.sentenceElement.textContent = text;
  }

  /**
   * Updates the displayed score.
   * @param {string} text - The text to be displayed.
   */
  updateScore(text) {
    this.scoreElement.textContent = text;
  }

  /**
   * Updates the font style based on the isCursive state.
   */
  updateFontStyle() {
    if (this.isCursive) {
      this.sentenceElement.style.fontFamily = "Dancing Script";
      this.switchStyleElement.textContent = "(Switch to block text - easy)";
    } else {
      this.sentenceElement.style.fontFamily = "inherit";
      this.switchStyleElement.textContent = "(Switch to cursive text - hard)";
    }
  }

  /**
   * Displays the answer div with the result of the player's guess and the translation.
   * @param {boolean} isCorrect - Whether the player's guess was correct or not.
   * @param {string} translation - The correct translation of the sentence.
   */
  showAnswer(isCorrect, translation) {
    // Show whether the guess was correct, translation, and next question button.

    // Show the answerDiv and Hide the questionDiv
    this.answerDiv.style.display = "block";
    this.questionDiv.style.display = "none";

    if (isCorrect) {
      this.answerDiv.classList.add("correct");
      this.answerDiv.classList.remove("wrong");
      this.resultElement.textContent = "Correct!";
    } else {
      this.answerDiv.classList.add("wrong");
      this.answerDiv.classList.remove("correct");
      this.resultElement.textContent = "Wrong!";
    }

    this.translationElement.textContent = "Translation: " + translation;
  }

  /**
   * Displays the next question and hides the answer div.
   * @param {string} sentence - The next sentence to be displayed.
   */
  showQuestion(sentence) {

    // Hide the answerDiv and Show the questionDiv
    this.answerDiv.style.display = "none";
    this.questionDiv.style.display = "block";
    this.sentenceElement.textContent = sentence;
  }
}
