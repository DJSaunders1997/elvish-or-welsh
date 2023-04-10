/**
 * gameLogic.js
 * This file contains the core game logic, including functions for
 * shuffling the array of sentences, checking player answers, and
 * updating the font style of the displayed sentence.
 */


/**
 * This function checks whether the player's answer is correct and updates the score and current sentence accordingly.
 * @param {string} answer - The player's answer, either "Elvish" or "Welsh".
 */
function checkAnswer(answer) {

    // Check if the player's answer is correct
    if (answer === sentences[currentSentenceIndex].language) {
        // If the answer is correct, increase the player's score by 1 and display a message to the player
        score++;
        scoreEl.textContent = score;
        sentenceEl.textContent = "Correct!";
    } else {
        // If the answer is wrong, display a message to the player
        sentenceEl.textContent = "Wrong!";
    }

    // Move on to the next sentence
    currentSentenceIndex++;

    // If we have reached the end of the sentences, loop back to the beginning
    if (currentSentenceIndex >= sentences.length) {
        currentSentenceIndex = 0;
    }

    // Display the next sentence after a delay of 1 second
    setTimeout(() => {
        sentenceEl.textContent = sentences[currentSentenceIndex].text;
    }, 1000);
}

/**
 * Toggles the font style of the sentence element between cursive and block text
 * and updates the text content of the switchStyleElement accordingly.
 */
function updateFontStyle() {
    if (isCursive) {
        sentenceEl.style.fontFamily = 'Dancing Script';
        switchStyleElement.textContent = '(Switch to block text)';
        isCursive = false;
    } else {
        sentenceEl.style.fontFamily = 'inherit';
        switchStyleElement.textContent = '(Switch to cursive text)';
        isCursive = true;
    }
}

export { checkAnswer, updateFontStyle };