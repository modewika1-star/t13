function checkTwoKinds(s) {
    if (s.length !== 4) {
        return false;
    }
    
    const uniqueChars = new Set(s);
    
    if (uniqueChars.size !== 2) {
        return false;
    }
    
    const chars = Array.from(uniqueChars);
    const count1 = s.split(chars[0]).length - 1;
    const count2 = s.split(chars[1]).length - 1;
    
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