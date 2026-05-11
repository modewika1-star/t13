function getLargestNumbers(nestedArray) {
    const largestNumbers = [];
    
    for (let i = 0; i < nestedArray.length; i++) {
        const subArray = nestedArray[i];
        let max = subArray[0];
        for (let j = 1; j < subArray.length; j++) {
            if (subArray[j] > max) {
                max = subArray[j];
            }
        }
        largestNumbers.push(max);
    }
    
    return largestNumbers;
}

function runLargestNumbers() {
    const countInput = prompt('How many subarrays will you enter?');
    if (countInput === null) return;
    const count = parseInt(countInput);
    if (isNaN(count) || count <= 0) {
        alert('Please enter a valid count');
        return;
    }

    const ordinals = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
    const nestedArray = [];

    for (let i = 0; i < count; i++) {
        const label = ordinals[i] !== undefined ? ordinals[i] : (i + 1) + 'th';
        const rowInput = prompt(`Enter numbers for the ${label} subarray (separated by spaces):`);
        if (rowInput === null) return;
        const row = rowInput.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));
        if (row.length === 0) {
            alert(`No valid numbers entered for subarray ${i + 1}`);
            return;
        }
        nestedArray.push(row);
    }

    const result = getLargestNumbers(nestedArray);

    console.log('Input:', JSON.stringify(nestedArray));
    console.log('Output:', result);

    document.getElementById('result').innerHTML =
        '<strong>Output:</strong> [' + result.join(', ') + ']';
}