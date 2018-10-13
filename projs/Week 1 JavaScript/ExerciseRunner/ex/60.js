'use strict';

console.log('Ex 60 Solution');

const SIZE = 10;

var gBoard = createBoard();
var game = setInterval(play, 500);
var playingCycleCount = 0;

function play() {
    var board = renderBoard(gBoard)
    runGeneretion(board)
    console.table(gBoard);
    console.log('Generation: ' , playingCycleCount+1);
    if (playingCycleCount === 1000) {
        clearInterval(game);
        console.log('DONE');
    }
    else playingCycleCount++;
}

function renderBoard(gboard) {
    var board = gboard.slice();
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var lifeAround = countLifeAround(gBoard, i, j);
            if (lifeAround <= 2) {
                board[i][j] = '';
            } else if (lifeAround <= 5) {
                board[i][j] = 'X';
            } else {
                board[i][j] = '';
            }
        }
    }
    return board;
}

function runGeneretion(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            (Math.random() > 0.5) ? board[i][j] = 'X' : board[i][j] = '';
        }
    }
    return board;
}

function createBoard() {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i].push('')
        }
    }
    return board;
}

function countLifeAround(mat, cellI, cellJ) {
    var lifeCount = 0;

    for (var i = cellI - 1; i <= cellI + 1; i++) {

        if (i < 0 || i >= mat.length) continue;

        for (var j = cellJ - 1; j <= cellJ + 1; j++) {

            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;

            if (mat[i][j] === 'X') lifeCount++;
        }
    }
    return lifeCount;
}