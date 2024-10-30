function checkAnswer() {
    const correctAnswer = "4"; // The correct answer to the quiz question
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the selected radio button

    if (userAnswer) {
        const selectedValue = userAnswer.value; // Get the value of the selected answer
        const feedback = document.getElementById("feedback");

        if (selectedValue === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer!");
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
