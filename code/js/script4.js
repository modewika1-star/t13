function sliceArray(array, start, end) {
    start = Number(start);
    end = Number(end);
    
    if (isNaN(start)) start = 0;
    if (isNaN(end)) end = array.length;
    
    if (start < 0) start = Math.max(0, array.length + start);
    if (end < 0) end = Math.max(0, array.length + end);
    
    start = Math.max(0, Math.min(start, array.length));
    end = Math.max(start, Math.min(end, array.length));
    
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(array[i]);
    }
    
    return result;
}

function mySlice() {
    const input = prompt('Enter a number (e.g. 123456789 or with (,)):');
    if (input === null) return;
    const startInput = prompt('Enter start index:');
    if (startInput === null) return;
    const endInput = prompt('Enter end index (leave empty for end):');
    if (endInput === null) return;

    const start = startInput.trim();
    const end = endInput.trim();

    if (!input.trim()) {
        document.getElementById('result').innerHTML = 'Please enter a number';
        return;
    }

    const array = input.trim().replace(/^-/, '').split('').map(Number);

    const mySliceResult = sliceArray(array, start, end);

    console.log(`mySlice(${start}, ${end}): ${mySliceResult.join('')}`);

    document.getElementById('result').innerHTML = `
        <strong>mySlice(${start}, ${end}):</strong> ${mySliceResult.join('')}
    `;
}

