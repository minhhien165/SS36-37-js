function calculateSum() {
    let input1Value = parseFloat(document.getElementById('input1').value) || 0;
    let input2Value = parseFloat(document.getElementById('input2').value) || 0;

    let resultElement1 = document.getElementById('result');
    resultElement1.value = (input1Value + input2Value).toString();

    let resultElement2 = document.getElementById('result');
    resultElement2.innerHTML = "Cách 2: " + (input1Value + input2Value);
}
