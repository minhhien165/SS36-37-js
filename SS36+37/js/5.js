function addItem() {
    let inputValue = document.getElementById('inputValue').value;

    if (inputValue.trim() !== '') {
        let listElement = document.getElementById('list');
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputValue));

        listElement.appendChild(li);

        document.getElementById('inputValue').value = '';

        document.getElementById('inputValue').style.backgroundColor = 'white';
    }
}

document.getElementById('inputValue').addEventListener('input', function() {
    let inputValue = this.value;

    this.style.backgroundColor = (inputValue.trim() === '') ? 'yellow' : 'white';
});