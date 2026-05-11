const cells = [];
let btnX, btnO, hoverInfo, resultEl;

function applyStyles() {
    btnX = document.getElementById('btnX');
    btnO = document.getElementById('btnO');
    hoverInfo = document.getElementById('hoverInfo');
    resultEl = document.getElementById('result');

    Object.assign(document.body.style, { fontFamily: 'Arial, sans-serif', textAlign: 'center' });
    Object.assign(document.getElementById('controls').style, { margin: '16px 0' });

    [btnX, btnO].forEach(btn => {
        Object.assign(btn.style, {
            padding: '10px 28px', fontSize: '18px', fontWeight: 'bold',
            border: '3px solid #aaa', borderRadius: '8px', cursor: 'pointer',
            margin: '0 8px', background: '#f0f0f0'
        });
    });

    Object.assign(hoverInfo.style, {
        fontSize: '16px', minHeight: '24px', margin: '8px 0', color: '#555'
    });

    Object.assign(document.getElementById('board').style, {
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(3, 90px)',
        gridTemplateRows: 'repeat(3, 90px)',
        gap: '6px', margin: '16px auto'
    });

    const hoverLabels = [
        'Row 1, Col 1','Row 1, Col 2','Row 1, Col 3',
        'Row 2, Col 1','Row 2, Col 2','Row 2, Col 3',
        'Row 3, Col 1','Row 3, Col 2','Row 3, Col 3'
    ];

    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById('c' + i);
        cells[i] = cell;
        Object.assign(cell.style, {
            width: '90px', height: '90px', fontSize: '36px', fontWeight: 'bold',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '3px solid #333', borderRadius: '10px', cursor: 'pointer',
            background: '#fff', userSelect: 'none', boxSizing: 'border-box'
        });
        cell.addEventListener('click', function() { placeSymbol(i); });
        cell.addEventListener('mouseenter', function() {
            if (!boardState[i]) cell.style.background = '#fffde7';
            hoverInfo.textContent = 'Look at: ' + hoverLabels[i] + ' ==> ' + (boardState[i] || 'empty');
        });
        cell.addEventListener('mouseleave', function() {
            if (!boardState[i]) cell.style.background = '#fff';
            hoverInfo.textContent = '';
        });
    }

    Object.assign(document.getElementById('actionButtons').style, { margin: '12px 0' });

    [document.getElementById('btnCheck'), document.getElementById('btnReset')].forEach(btn => {
        Object.assign(btn.style, {
            padding: '8px 22px', fontSize: '15px', margin: '0 6px',
            cursor: 'pointer', borderRadius: '6px', border: '2px solid #aaa'
        });
    });

    Object.assign(resultEl.style, {
        fontSize: '20px', fontWeight: 'bold', marginTop: '12px', minHeight: '28px'
    });

    Object.assign(btnX.style, { background: '#ffd6d6', borderColor: 'red', color: 'red' });
}

function findWinner(board) {
    const grid = [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]]
    ];
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) return grid[i][0];
        if (grid[0][i] && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) return grid[0][i];
    }
    if (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) return grid[0][0];
    if (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) return grid[0][2];
    return null;
}

const boardState = Array(9).fill('');
let currentSymbol = 'X';

function selectSymbol(sym) {
    currentSymbol = sym;
    Object.assign(btnX.style, { background: '#f0f0f0', borderColor: '#aaa', color: '#000' });
    Object.assign(btnO.style, { background: '#f0f0f0', borderColor: '#aaa', color: '#000' });
    if (sym === 'X') {
        Object.assign(btnX.style, { background: '#ffd6d6', borderColor: 'red', color: 'red' });
    } else {
        Object.assign(btnO.style, { background: '#d6e8ff', borderColor: 'blue', color: 'blue' });
    }
}

function placeSymbol(index) {
    if (boardState[index]) return;
    boardState[index] = currentSymbol;
    const cell = cells[index];
    cell.textContent = currentSymbol;
    cell.style.color = currentSymbol === 'X' ? 'red' : 'blue';
    console.log('Placed ' + currentSymbol + ' at cell ' + index);
    currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
    selectSymbol(currentSymbol);
}

function hoverCell(index) {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    hoverInfo.textContent = 'Look at: Row ' + row + ', Col ' + col +
        (boardState[index] ? ' ==> ' + boardState[index] : ' ==> empty');
}

function clearHover() {
    hoverInfo.textContent = '';
}

function runWinnerCheck() {
    const winner = findWinner(boardState);
    if (winner) {
        resultEl.style.color = winner === 'X' ? 'red' : 'blue';
        resultEl.textContent = 'Winner: ' + winner + '!';
        console.log('Winner: ' + winner);
    } else {
        resultEl.style.color = '#333';
        resultEl.textContent = boardState.includes('') ? 'No winner yet.' : 'Draw!';
        console.log('No winner.');
    }
}

function resetBoard() {
    boardState.fill('');
    for (let i = 0; i < 9; i++) {
        cells[i].textContent = '';
        cells[i].style.color = '';
        cells[i].style.background = '#fff';
    }
    resultEl.textContent = '';
    hoverInfo.textContent = '';
    console.log('Board reset.');
}

window.onload = applyStyles;