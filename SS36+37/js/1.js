function validateAnswer() {
    let answerInput = document.getElementById('answerInput').value;
    let messageElement = document.getElementById('message');

    if (answerInput.length > 10) {
        messageElement.textContent = 'Invalid answer! Answer length should be 10 characters or less.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Success! Answer is valid.';
        messageElement.style.color = 'green';
    }
}
