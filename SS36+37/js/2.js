function changeContent() {
    let buttonElement = document.getElementById('changeButton');

    if (buttonElement.textContent === 'OFF') {
        buttonElement.textContent = 'ON';
    } else {
        buttonElement.textContent = 'OFF';
    }
}
