// create matrix board
// INPUT: Matrix SIZE
// OUTPUT: Returns a new matrix
function createBoard() {
    var board = [];
    for (var i = 0; i < gCurrLevel.size; i++) {
        board.push([])
        for (var j = 0; j < gCurrLevel.size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
                emptyNeighborsCount: null
            };
        }
    }
    return board;
}


// DOM - Render board
// INPUT: gets a board
// OUTPUT: print it to the DOM 
function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[i].length; j++) {
            strHTML += `<td class="cell-${i}-${j}" onmouseup="(gFirstClickIndicator)? firstClick(event, this) : cellClicked(event, this)">`; // onmousedown="firstClick(this)"
            strHTML += (board[i][j].isMine) ? MINE :
                (board[i][j].isMarked) ? FLAG :
                    (board[i][j].isShown) ? (board[i][j].minesAroundCount === 0) ? '' :
                        board[i][j].minesAroundCount : '';
            strHTML += '</td>';
        }
        strHTML += '</tr>';
    }

    var elBoard = document.querySelector('.board-container');
    elBoard.innerHTML = strHTML;
    console.log(elBoard);
}


function selectLevel(num) {
    var level;
    switch (num) {
        case 0:
            level = {
                size: 4,
                mines: 2
            };
            break;
        case 1:
            level = {
                size: 6,
                mines: 5
            };
            break;
        case 2:
            level = {
                size: 8,
                mines: 15
            };
            break;

        default:
            level = {
                size: num,
                mines: (num > 20) ? parseInt(num ** 2 / 4) : parseInt(num ** 2 / 6)
            }

    }
    return level;
}

// Check if a cell is empty
// INPUT: coord{i,j} , gBoard
// OUTPUT: Returns true if empty, else returns false
function isEmptyCell(i, j) {
    // CR: Why? No need for function here.
    try {
        return !gBoard[i][j].isMine;
    } catch (error) {
        return false;
    }
}