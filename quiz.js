// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer from the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if a choice was selected
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // User's answer is correct
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // User's answer is incorrect
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // No answer was selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
