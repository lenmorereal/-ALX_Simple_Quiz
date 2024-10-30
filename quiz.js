// Function Declaration
function checkAnswer() {
    // Correct Answer
    const correctAnswer = "4";
    
    // Retrieve User's Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswer) {
        const userAnswerValue = userAnswer.value;

        // Compare User's Answer with the Correct Answer
        if (userAnswerValue === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Feedback if no option is selected
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Add Event Listener to Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
