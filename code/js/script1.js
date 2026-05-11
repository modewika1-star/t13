function findFirstDigit() {
    const numberInput = document.getElementById('inputNumber').value;
    
    const num = parseInt(numberInput);
    if (numberInput.trim() === '' || isNaN(num)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number';
        return;
    }
    
    const leftMostDigit = numberInput.trim().replace(/^-/, '')[0];
    
    document.getElementById('result').innerHTML = 
        `Left Most Digit: <strong>${leftMostDigit}</strong>`;
}

document.getElementById('inputNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        findFirstDigit();
    }
});