function checkTwoKinds(s) {
    // Check length exactly 4
    if (s.length !== 4) {
        return false;
    }
    
    // Get unique characters
    const uniqueChars = new Set(s);
    
    // Must have exactly 2 different characters
    if (uniqueChars.size !== 2) {
        return false;
    }
    
    // Convert set to array and count occurrences
    const chars = Array.from(uniqueChars);
    const count1 = s.split(chars[0]).length - 1;
    const count2 = s.split(chars[1]).length - 1;
    
    // Each must appear exactly 2 times
    return count1 === 2 && count2 === 2;
}

function runCheck() {
    const input = document.getElementById('inputString').value.toUpperCase().trim();
    
    if (!input) {
        document.getElementById('result').innerHTML = 'Please enter 4 characters';
        return;
    }
    
    const result = checkTwoKinds(input);

    console.log('Input: "' + input + '" => ' + result);

    document.getElementById('result').innerHTML = 
        '<strong>Result:</strong> ' + result;
}

document.getElementById('inputString').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        runCheck();
    }
});

document.getElementById('inputString').addEventListener('input', function() {
    let value = this.value;
    if (value.length > 4) {
        this.value = value.slice(0, 4);
    }
});