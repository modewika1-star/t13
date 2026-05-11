function abbreviateString(str) {
    const s = str.trim();
    
    if (s.length <= 10) {
        return s;
    } else {
        const firstChar = s[0];
        const lastChar = s[s.length - 1];
        const middleCount = s.length - 2;
        return firstChar + middleCount + lastChar;
    }
}

function runAbbreviate() {
    const input = document.getElementById('inputString').value;

    if (!input.trim()) {
        document.getElementById('result').innerHTML = 'Please enter a string';
        return;
    }

    const result = abbreviateString(input);

    console.log('Input: "' + input + '"');
    console.log('Output: "' + result + '"');

    document.getElementById('result').innerHTML =
        '<strong>Output:</strong> "' + result + '"';
}

document.getElementById('inputString').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') runAbbreviate();
});
