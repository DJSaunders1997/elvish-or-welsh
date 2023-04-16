// ui.js
export default class UI {
  /**
   * Initializes the UI class.
   * Sets up the HTML elements for displaying the current sentence and player score.
   * Contains Cursive functionality for toggling between cursive and block text font styles.
   */
  constructor() {
    this.scoreEl = document.querySelector("#score"); //DOM element for displaying the player's score.

    // Question Div contains sentence, switch style, and button elvish/welsh elements
    this.questionDiv = document.getElementById("questionDiv");
    this.sentenceEl = document.querySelector("#sentence");
    this.switchStyleEl = document.querySelector("#switch-style");

    // Answer Div contains result, translation, and next question button
    this.answerDiv = document.getElementById("answerDiv");
    this.resultEl = document.getElementById("result");
    this.translationEl = document.getElementById("translation");

    // Initialize the Cursive variable
    this.isCursive = true;
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
   * Update the font style based on the isCursive state.
   */
  updateFontStyle() {
    if (this.isCursive) {
      this.sentenceEl.style.fontFamily = "Dancing Script";
      this.switchStyleEl.textContent = "(Switch to block text - easy)";
    } else {
      this.sentenceEl.style.fontFamily = "inherit";
      this.switchStyleEl.textContent = "(Switch to cursive text - hard)";
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

    // Update class list which changes div colour
    if (isCorrect) {
      answerDiv.classList.add("correct");
      answerDiv.classList.remove("wrong");
      this.resultEl.textContent = "Correct!";
    } else {
      answerDiv.classList.add("wrong");
      answerDiv.classList.remove("correct");
      this.resultEl.textContent = "Wrong!";
    }

    this.translationEl.textContent = "Translation: " + translation;
  }

  /**
   * Displays the next question and hides the answer div.
   * @param {string} sentence - The next sentence to be displayed.
   */
  showQuestion(sentence) {
    // Your logic showing the next question goes here.

    // Hide the answerDiv and Show the questionDiv
    this.answerDiv.style.display = "none";
    this.questionDiv.style.display = "block";

    // TODO: manage any other functionality

    this.sentenceEl.textContent = sentence;
  }
}
