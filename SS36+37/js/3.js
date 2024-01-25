function displayContent() {
    let inputText = document.getElementById('inputText').value;

    let outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML = "Cách 1: " + inputText;

    let outputDivText = document.createTextNode("Cách 2: " + inputText);

    if (document.getElementById('outputDivText')) {
        let parentDiv = outputDiv.parentNode;
        parentDiv.replaceChild(outputDivText, document.getElementById('outputDivText'));
    } else {
        outputDivText.id = 'outputDivText';
        outputDiv.appendChild(outputDivText);
    }
}
