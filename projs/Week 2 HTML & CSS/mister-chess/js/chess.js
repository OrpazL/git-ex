'use strict'

// Pieces Types
var KING_WHITE = '♔';
var QUEEN_WHITE = '♕';
var ROOK_WHITE = '♖';
var BISHOP_WHITE = '♗';
var KNIGHT_WHITE = '♘';
var PAWN_WHITE = '♙';
var KING_BLACK = '♚';
var QUEEN_BLACK = '♛';
var ROOK_BLACK = '♜';
var BISHOP_BLACK = '♝';
var KNIGHT_BLACK = '♞';
var PAWN_BLACK = '♟';

// The Chess Board
var gBoard;
var gSelectedElCell = null;

function restartGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board[i] = [];
        for (var j = 0; j < 8; j++) {

            var piece = ''
            if (i === 1) piece = PAWN_BLACK;
            else if (i === 6) piece = PAWN_WHITE;
            board[i][j] = piece;
        }
    }

    // board[4][4] = ROOK_BLACK;

    board[0][0] = board[0][7] = ROOK_BLACK;
    board[0][1] = board[0][6] = KNIGHT_BLACK;
    board[0][2] = board[0][5] = BISHOP_BLACK;
    board[0][3] = KING_BLACK;
    board[0][4] = QUEEN_BLACK;

    board[7][0] = board[7][7] = ROOK_WHITE;
    board[7][1] = board[7][6] = KNIGHT_WHITE;
    board[7][2] = board[7][5] = BISHOP_WHITE;
    board[7][3] = KING_WHITE;
    board[7][4] = QUEEN_WHITE;

    console.table(board);
    return board;

}

function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            var className = ((i + j + 1) % 2 === 0) ? 'black' : 'white';
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="    ' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector('.game-board');
    elMat.innerHTML = strHtml;
}


function cellClicked(elCell) {

    if (gSelectedElCell && elCell.classList.contains('mark')) {
        movePiece(gSelectedElCell, elCell);
        cleanBoard();
        return;
    }

    cleanBoard();


    elCell.classList.add('selected');
    gSelectedElCell = elCell;

    // console.log('elCell.id: ', elCell.id);
    var cellCoord = getCellCoord(elCell.id);
    var piece = gBoard[cellCoord.i][cellCoord.j];

    var possibleCoords = [];
    switch (piece) {
        case ROOK_BLACK:
        case ROOK_WHITE:
            possibleCoords = getAllPossibleCoordsRook(cellCoord);
            break;
        case BISHOP_BLACK:
        case BISHOP_WHITE:
            possibleCoords = getAllPossibleCoordsBishop(cellCoord);
            break;
        case KNIGHT_BLACK:
        case KNIGHT_WHITE:
            possibleCoords = getAllPossibleCoordsKnight(cellCoord);
            break;
        case PAWN_BLACK:
        case PAWN_WHITE:
            possibleCoords = getAllPossibleCoordsPawn(cellCoord, piece === PAWN_WHITE);
            break;
        case KING_WHITE:
        case KING_BLACK:
            possibleCoords = getAllPossibleCoordsKing(cellCoord);
            break;
        case QUEEN_WHITE:
        case QUEEN_BLACK:
            possibleCoords = getAllPossibleCoordsQueen(cellCoord);
            break;


    }
    markCells(possibleCoords);
}

function movePiece(elFromCell, elToCell) {
    var fromCoord = getCellCoord(elFromCell.id);
    var toCoord = getCellCoord(elToCell.id);
    var piece = gBoard[fromCoord.i][fromCoord.j];

    if (!piece) return;

    // Update the Model
    gBoard[fromCoord.i][fromCoord.j] = '';
    gBoard[toCoord.i][toCoord.j] = piece;

    // Update the DOM
    elToCell.innerText = piece;
    elFromCell.innerText = '';
}

function markCells(coords) {
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];
        var selector = getSelector(coord);
        var elCell = document.querySelector(selector);
        elCell.classList.add('mark');
    }

}
// Gets a string such as:  'cell-2-7' and returns {i:2, j:7}
function getCellCoord(strCellId) {
    var coord = {};
    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    // console.log('coord', coord);
    return coord;
}

function cleanBoard() {
    var tds = document.querySelectorAll('.mark, .selected');
    for (var i = 0; i < tds.length; i++) {
        tds[i].classList.remove('mark', 'selected');
    }
}

function getSelector(coord) {
    return '#cell-' + coord.i + '-' + coord.j;
}

function isEmptyCell(coord) {
    try {
        return gBoard[coord.i][coord.j] === '';
    } catch (error) {
        return false;
    }
}


function getAllPossibleCoordsPawn(pieceCoord, isWhite) {
    var res = [];

    var diff = (isWhite) ? -1 : 1;

    var coord = { i: pieceCoord.i + diff, j: pieceCoord.j }

    if (!isEmptyCell(coord)) return res;
    res.push(coord)


    if (isWhite && pieceCoord.i === 6 || !isWhite && pieceCoord.i === 1) {
        diff = (isWhite) ? -2 : 2
        coord = { i: pieceCoord.i + diff, j: pieceCoord.j }
        if (isEmptyCell(coord)) res.push(coord)
    }
    return res;
}

function getAllPossibleCoordsKing(pieceCoord) {
    var res = [];
    // var coord = { i: pieceCoord.i + 1, j: pieceCoord.j };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 1, j: pieceCoord.j };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i, j: pieceCoord.j + 1 };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i, j: pieceCoord.j - 1 };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 1, j: pieceCoord.j + 1 };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 1, j: pieceCoord.j - 1 };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 1, j: pieceCoord.j + 1 };
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 1, j: pieceCoord.j - 1 };
    // if (isEmptyCell(coord)) res.push(coord);

    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (i === j === 0) continue;
            var coord = { i: pieceCoord.i + i, j: pieceCoord.j + j };
            if (isEmptyCell(coord)) res.push(coord);
        }
    }
    return res;
}

function getAllPossibleCoordsRook(pieceCoord) {
    var res = [];

    // UP
    var i = pieceCoord.i - 1;
    for (var idx = pieceCoord.j; i >= 0 && idx >= 0; i--) {
        var coord = { i: i, j: pieceCoord.j };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    // DOWN
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j; i < 8 && idx >= 0; idx++) {
        var coord = { i: i++, j: pieceCoord.j };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    // LEFT
    i = pieceCoord.i - 1;
    for (idx = pieceCoord.j - 1; i >= 0 && idx >= 0; idx--) {
        var coord = { i: pieceCoord.i, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    // RIGHT
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j + 1; i < 8 && idx < 8; idx++) {
        var coord = { i: pieceCoord.i, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    return res;
}

function getAllPossibleCoordsBishop(pieceCoord) {
    var res = [];
    var i = pieceCoord.i - 1;
    for (var idx = pieceCoord.j + 1; i >= 0 && idx < 8; idx++) {
        var coord = { i: i--, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j + 1; i < 8 && idx < 8; idx++) {
        var coord = { i: i++, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i - 1;
    for (idx = pieceCoord.j - 1; i >= 0 && idx >= 0; idx--) {
        var coord = { i: i--, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j - 1; i < 8 && idx >= 0; idx--) {
        var coord = { i: i++, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }

    return res;
}

function getAllPossibleCoordsKnight(pieceCoord) {
    var res = [];

    // var coord = { i: pieceCoord.i - 2, j: pieceCoord.j - 1 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 2, j: pieceCoord.j + 1 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 1, j: pieceCoord.j + 2 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i - 1, j: pieceCoord.j - 2 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 1, j: pieceCoord.j - 2 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 1, j: pieceCoord.j + 2 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 2, j: pieceCoord.j - 1 }
    // if (isEmptyCell(coord)) res.push(coord);
    // coord = { i: pieceCoord.i + 2, j: pieceCoord.j + 1 }
    // if (isEmptyCell(coord)) res.push(coord);

    for (var i = pieceCoord.i - 2; i <= pieceCoord.i + 2; i++) {

        var iDiff = Math.abs(i - pieceCoord.i);
        var coord1 = null, coord2 = null;
        if (iDiff === 2) {
            coord1 = { i, j: pieceCoord.j + 1 }
            coord2 = { i, j: pieceCoord.j - 1 }
        } else if (iDiff === 1) {
            coord1 = { i, j: pieceCoord.j + 2 }
            coord2 = { i, j: pieceCoord.j - 2 }
        }
        if (coord1 && coord2) {
            if (isEmptyCell(coord1)) res.push(coord1);
            if (isEmptyCell(coord2)) res.push(coord2);
        }

        // if (i === 0) continue;
        // var j = Math.abs(i) - 3;
        // if (!(Math.abs(i) + j === 3)) {
        //     console.log('Knight moves isnt equal to 3');
        // }
        // var coord = { i: pieceCoord.i + i, j: pieceCoord.j + j };
        // if (isEmptyCell(coord)) res.push(coord);

        // if (Math.abs(i) === 1) j = Math.abs(i) + 1;
        // else j = Math.abs(i) - 1;

        // coord = { i: pieceCoord.i, j: pieceCoord.j + j };
        // if (isEmptyCell(coord)) res.push(coord);
    }


    return res;
}

function getAllPossibleCoordsQueen(pieceCoord) {
    var res = [];
    var i = pieceCoord.i - 1;
    for (var idx = pieceCoord.j + 1; i >= 0 && idx < 8; idx++) {
        var coord = { i: i--, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j + 1; i < 8 && idx < 8; idx++) {
        var coord = { i: i++, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i - 1;
    for (idx = pieceCoord.j - 1; i >= 0 && idx >= 0; idx--) {
        var coord = { i: i--, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j - 1; i < 8 && idx >= 0; idx--) {
        var coord = { i: i++, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }

    i = pieceCoord.i - 1;
    for (var idx = pieceCoord.j; i >= 0 && idx >= 0; idx--) {
        var coord = { i: i--, j: pieceCoord.j };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j + 1; i < 8 && idx >= 0; idx--) {
        var coord = { i: i++, j: pieceCoord.j };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i - 1;
    for (idx = pieceCoord.j - 1; i >= 0 && idx >= 0; idx--) {
        var coord = { i: pieceCoord.i, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }
    i = pieceCoord.i + 1;
    for (idx = pieceCoord.j + 1; i < 8 && idx < 8; idx++) {
        var coord = { i: pieceCoord.i, j: idx };
        if (!isEmptyCell(coord)) break;
        res.push(coord);
    }

    return res;
}
