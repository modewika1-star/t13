function countNumbers() {
    const input = document.getElementById('inputArray').value.trim();
    
    if (!input) {
        document.getElementById('result').innerHTML = 'Please enter numbers';
        return;
    }
    
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        document.getElementById('result').innerHTML = 'No valid numbers found';
        return;
    }

    let positive = 0;
    let negative = 0;
    let even = 0;
    let odd = 0;
    

    numbers.forEach(num => {

        if (num > 0) positive++;

        if (num < 0) negative++;
        
        if (num % 2 === 0) even++;
        
        else odd++;
    });
    
    document.getElementById('result').innerHTML = `
        positive = ${positive}<br>
        negative = ${negative}<br>
        even = ${even}<br>
        odd = ${odd}
    `;
}

function countNumbersPrompt() {
    const ordinals = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];

    const countInput = prompt('How many numbers will you enter?');
    if (countInput === null) return;
    const count = parseInt(countInput);
    if (isNaN(count) || count <= 0) {
        alert('Please enter a valid count');
        return;
    }

    const numbers = [];
    for (let i = 0; i < count; i++) {
        const label = ordinals[i] !== undefined ? ordinals[i] : (i + 1) + 'th';
        const val = prompt(`Enter the ${label} number:`);
        if (val === null) return;
        numbers.push(val.trim());
    }

    document.getElementById('inputArray').value = numbers.join(',');
    countNumbers();
}

document.getElementById('inputArray').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        countNumbers();
    }
});