function checkConsecutiveSum(arr, target) {
    // Try all possible subarrays
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) {
                return true;
            }
        }
    }
    return false;
}

function enterValues() {
    const arrayInput = prompt('Enter numbers (e.g. 12345):');
    if (arrayInput === null || arrayInput.trim() === '') return;
    const withCommas = arrayInput.trim().split('').join(',');
    document.getElementById('inputArray').value = withCommas;

    const targetInput = prompt('Enter target number:');
    if (targetInput === null || targetInput.trim() === '') return;
    document.getElementById('inputTarget').value = targetInput.trim();

    hasConsecutiveSum();
}

function hasConsecutiveSum() {
    const arrayInput = document.getElementById('inputArray').value.trim();
    const targetInput = parseFloat(document.getElementById('inputTarget').value);
    
    if (!arrayInput || isNaN(targetInput)) {
        document.getElementById('result').innerHTML = 'Please enter valid array and target';
        return;
    }
    
    const arr = arrayInput.split(',').map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
    
    if (arr.length === 0) {
        document.getElementById('result').innerHTML = 'No valid numbers in array';
        return;
    }
    
    const result = checkConsecutiveSum(arr, targetInput);
    
    document.getElementById('result').innerHTML = 
        'Array: [' + arr.join(', ') + ']<br>' +
        'Target: ' + targetInput + '<br>' +
        'Result: <strong>' + result + '</strong>';
}

document.getElementById('inputArray').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        hasConsecutiveSum();
    }
});

document.getElementById('inputTarget').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        hasConsecutiveSum();
    }
});