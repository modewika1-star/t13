function getAllIndices(arr, char) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            indices.push(i + 1);
        }
    }
    return indices;
}

function enterWord() {
    const word = prompt('Enter a word:');
    if (word === null || word.trim() === '') return;
    const letters = word.trim().split('').join(',');
    document.getElementById('inputArray').value = letters;

    const char = prompt('Enter a character to find:');
    if (char === null || char.trim() === '') return;
    document.getElementById('inputChar').value = char.trim()[0];

    findFirstLast();
}

function findFirstLast() {
    const arrayInput = document.getElementById('inputArray').value.trim();
    const charInput = document.getElementById('inputChar').value.trim();
    
    if (!arrayInput || !charInput) {
        document.getElementById('result').innerHTML = 'Please enter array and character';
        return;
    }
    
    const arr = arrayInput.split(',').map(item => item.trim());
    const char = charInput;
    
    const result = getAllIndices(arr, char);
    
    if (result.length === 0) {
        document.getElementById('result').innerHTML =
            'Array: [' + arr.join(', ') + ']<br>' +
            'Char: "' + char + '" not found.';
        return;
    }

    document.getElementById('result').innerHTML = 
        'Array: [' + arr.join(', ') + ']<br>' +
        'Char: "' + char + '"<br>' +
        'First/Last: [' + result[0] + ', ' + result[result.length - 1] + ']<br>' +
        'All places: [' + result.join(', ') + ']';
}

document.getElementById('inputArray').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        findFirstLast();
    }
});

document.getElementById('inputChar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        findFirstLast();
    }
});
