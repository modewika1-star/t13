function filterIntegers() {
    const input = document.getElementById('inputArray').value.trim();
    
    if (!input) {
        document.getElementById('result').innerHTML = 'Please enter array elements';
        return;
    }
    
    try {
        const arrayStr = `[${input}]`;
        const inputArray = eval(arrayStr);
        
        const integers = inputArray.filter(item => {
            return Number.isInteger(Number(item));
        });
        
        document.getElementById('result').innerHTML = `
            <strong>Output:</strong> [${integers.join(', ')}]
        `;
        
    } catch (error) {
        const elements = input.split(',').map(el => el.trim());
        const inputArray = elements.map(el => {
            if (el === 'NaN') return NaN;
            if (el === 'null') return null;
            if (el === 'undefined') return undefined;
            return el;
        });
        
        const integers = inputArray.filter(item => Number.isInteger(Number(item)));
        
        document.getElementById('result').innerHTML = `
            <strong>Output:</strong> [${integers.join(', ')}]
        `;
    }
}

document.getElementById('inputArray').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filterIntegers();
    }
});