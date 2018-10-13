const SUNGLASSES_SMILEY = '&#128526;';
const SMILEY = '&#128578;';
const DEAD_SMILEY = '&#128565;';
const FLAG = '&#9873;';
const MINE = '<img src="img/mineclear.png"/>';

var gBoard;
var gTimerInterval;
var gCurrLevel;
var gState;
var gElCurrCell;
var gFirstClickIndicator;




function init(levelNum) {
    if (levelNum >= 0) gCurrLevel = selectLevel(levelNum);
    // create & render board
    gBoard = createBoard();
    renderBoard(gBoard);

    gState = {
        isGameOn: true,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    };

    // RESET HEADER
    // reset timer
    resetTimer();
    // reset smiley
    changeSmiley(SMILEY);

    // RESET MINE COUNTER
    var elMineCounter = document.querySelector('.mines-counter');
    elMineCounter.innerHTML = gCurrLevel.mines - gState.markedCount;
    if (elMineCounter.innerText.length === 1) elMineCounter.innerText = '0' + elMineCounter.innerText;

    // FIRST CLICK
    gFirstClickIndicator = true;

    // BEST TIME
    if (localStorage[`bestTime${gCurrLevel.size}`])
        document.querySelector('.best-time').innerHTML = localStorage[`bestTime${gCurrLevel.size}`];
    else
        document.querySelector('.best-time').innerHTML = '';

    // COLOR BUTTONS
    styleLevelBtns();

}

function firstClick(event, elCell) {
    if (!(gTimerInterval > 0)) {
        gElCurrCell = elCell;
        placeMines();
        gTimerInterval = setInterval(timer, 1000);
        // console.log(elCell)
        cellClicked(event, elCell);
        gFirstClickIndicator = false;
    }
}

function timer() {
    var elMinutes = document.querySelector('.timer #minutes');
    var elSeconds = document.querySelector('.timer #seconds');
    if (+elSeconds.innerText === 59) {
        elSeconds.innerText = '00';
        elMinutes.innerText = +elMinutes.innerText + 1;
    } else +elSeconds.innerText++;

    // fix single digit numbers to 2 digits format
    if (elSeconds.innerText.length === 1) {
        elSeconds.innerText = '0' + +elSeconds.innerText;
    }
    if (elMinutes.innerText.length === 1) {
        elMinutes.innerText = '0' + +elMinutes.innerText;
    }
    gState.secsPassed++;

    // check for victory
    checkGameOver();
}


function resetTimer() {
    clearInterval(gTimerInterval);
    gTimerInterval = undefined;

    var elMinutes = document.querySelector('.timer #minutes');
    var elSeconds = document.querySelector('.timer #seconds');
    elMinutes.innerText = '00';
    elSeconds.innerText = '00';

}


function smileyClick(isPressed) {
    var elSmiley = document.querySelector('.btn-smiley');
    if (isPressed) elSmiley.style['background-color'] = 'gray';
    else elSmiley.style['background-color'] = 'azure';
}

function styleLevelBtns() {
    var elBtns = document.querySelectorAll('.btn-level');
    for (var i = 0; i < elBtns.length; i++) {
        elBtns[i].style['background-color'] = 'cyan';
        elBtns[i].style['font-style'] = 'unset';
    }
    var elBtn;
    switch (gCurrLevel.size) {
        case 4:
            elBtn = document.querySelector('#btn-easy');
            elBtn.style['background-color'] = 'rgb(0, 255, 76)';
            elBtn.style['font-style'] = 'italic';
            break;
        case 6:
            elBtn = document.querySelector('#btn-medium');
            elBtn.style['background-color'] = 'rgb(0, 255, 76)';
            elBtn.style['font-style'] = 'italic';
            break;
        case 8:
            elBtn = document.querySelector('#btn-hard');
            elBtn.style['background-color'] = 'rgb(0, 255, 76)';
            elBtn.style['font-style'] = 'italic';
            break;

        default:
            elBtn = document.querySelector('#btn-custom');
            elBtn.style['background-color'] = 'rgb(0, 255, 76)';
            elBtn.style['font-style'] = 'italic';
    }
}

function changeSmiley(face) {
    var elSmiley = document.querySelector('.btn-smiley');
    elSmiley.innerHTML = face;
}

function placeMines() {
    var mines = gCurrLevel.mines;
    for (var i = 0; i < mines; i++) {
        var rndPosI = Math.floor(Math.random() * gCurrLevel.size);
        var rndPosJ = Math.floor(Math.random() * gCurrLevel.size);
        if (isEmptyCell(rndPosI, rndPosJ)) {
            if (getCellPos(gElCurrCell).i === rndPosI && getCellPos(gElCurrCell).j === rndPosJ)
                mines++;
            else gBoard[rndPosI][rndPosJ].isMine = true;
            console.log('Mine #' + (i + 1), `pos: ${rndPosI},${rndPosJ}`);
        } else {
            mines++;
            console.log('Mine #' + (i + 1), `pos: ${rndPosI},${rndPosJ}` , 'Already Excists! skipped..');
        }
    }

}

function countNeighbors(cellI, cellJ, mat) {
    var neighborsSum = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j].isMine) neighborsSum++;
        }
    }
    return neighborsSum;
}

function cellClicked(event, elCell) {
    if (!gState.isGameOn) return;
    // get i j
    var i = getCellPos(elCell).i;
    var j = getCellPos(elCell).j;
    var currCell = gBoard[i][j];
    gElCurrCell = elCell;

    if (currCell.isShown) return;
    // prevent accidently click on a marked cell
    if (currCell.isMarked & event.which === 1) return;
    // regular cell click
    else if (event.which === 1) {
        //check if cell is mine
        if (currCell.isMine) {
            openAllMines(gBoard);
            changeSmiley(DEAD_SMILEY);
            clearInterval(gTimerInterval);
            gState.isGameOn = false;
        }
        else {
            // update cell neighbors
            updateAllNeighbors();
            // update the model
            if (currCell.minesAroundCount === 0) cleanEmptyCells(+i, +j);
            if (!currCell.isShown) {
                gState.shownCount++;
                currCell.isShown = true;
            }
            // update DOM
            elCell.innerHTML = (currCell.minesAroundCount === 0) ? '' : currCell.minesAroundCount;
            elCell.style['background-color'] = 'gray';
        }
    }

    //mark cell
    var elMineCounter = document.querySelector('.mines-counter');
    elMineCounter.innerHTML = gCurrLevel.mines - gState.markedCount;
    if (!currCell.isMarked && event.which === 3) {
        // update model
        currCell.isMarked = true;
        gState.markedCount++;
        // update DOM
        elCell.innerHTML = FLAG;
        var elMineCounter = document.querySelector('.mines-counter');
        elMineCounter.innerHTML = gCurrLevel.mines - gState.markedCount;
    } else if (currCell.isMarked & event.which === 3) {
        // unmark cell 
        // update model
        currCell.isMarked = false;
        gState.markedCount--;
        // update DOM
        elCell.innerHTML = '';
        var elMineCounter = document.querySelector('.mines-counter');
        elMineCounter.innerHTML = gCurrLevel.mines - gState.markedCount;
    }
    if (elMineCounter.innerText.length === 1) elMineCounter.innerText = '0' + elMineCounter.innerText;



}

function updateAllNeighbors() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            gBoard[i][j].minesAroundCount = countNeighbors(+i, +j, gBoard);
        }
    }
}

function openAllMines(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j];
            if (currCell.isMine && !currCell.isMarked && !currCell.isShown) {
                currCell.isShown = true;
            }
        }
    }
    renderBoard(gBoard);
    var elCells = document.querySelectorAll('.board-container td');
    for (var i = 0; i < elCells.length; i++) {
        if (gBoard[getCellPos(elCells[i]).i][getCellPos(elCells[i]).j].isShown) {
            elCells[i].style['background-color'] = 'gray';
        } else
            elCells[i].style['background-color'] = 'lightgray';
    }
}

function getCellPos(elCell) {
    var i = +elCell.classList[0].split('-')[1];
    var j = +elCell.classList[0].split('-')[2];
    return { i, j };
}

function cleanEmptyCells(cellI, cellJ) {
    // debugger;
    if (gBoard[cellI][cellJ].emptyNeighborsCount !== null ||
        gBoard[cellI][cellJ].minesAroundCount !== 0 ||
        gBoard[cellI][cellJ].isMine
    ) return;
    // if (gBoard[cellI][cellJ].isMine || (gBoard[cellI][cellJ].minesAroundCount > 0)) return;
    var emptyNeighborsCount = gState.shownCount;

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            var currCell = gBoard[i][j];
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= gBoard[i].length) continue;
            if (currCell.minesAroundCount === 0) {
                // update model
                if (!currCell.isShown) {
                    gState.shownCount++;
                    currCell.isShown = true;
                }

                // update DOM
                var elCell = document.querySelector(`.cell-${i}-${j}`);
                elCell.innerHTML = (currCell.minesAroundCount === 0) ? '' : currCell.minesAroundCount;
                elCell.style['background-color'] = 'gray';

                emptyNeighborsCount = gState.shownCount - emptyNeighborsCount;
                gBoard[cellI][cellJ].emptyNeighborsCount = emptyNeighborsCount;
                // if ((i === cellI - 1 && j === cellJ - 1) || (i === cellI - 1 && j === cellJ + 1) ||
                //     (i === cellI + 1 && j === cellJ - 1) || (i === cellI + 1 && j === cellJ + 1))
                cleanEmptyCells(i, j);

            }
            if (currCell.minesAroundCount > 0 && (!currCell.isMine || currCell.isMarked)) {
                // update model
                if (!currCell.isShown) {
                    gState.shownCount++;
                    currCell.isShown = true;
                }
                // update DOM
                var elCell = document.querySelector(`.cell-${i}-${j}`);
                elCell.innerHTML = (currCell.minesAroundCount === 0) ? '' : currCell.minesAroundCount;
                elCell.style['background-color'] = 'gray';
                (currCell.minesAroundCount === 0) ? currCell.emptyNeighborsCount = 8 : 0;
            }
        }
    }

}

function checkGameOver() {
    if ((gCurrLevel.mines - gState.markedCount) === 0 && (gCurrLevel.size ** 2 - gCurrLevel.mines) === gState.shownCount) {
        changeSmiley(SUNGLASSES_SMILEY);
        clearInterval(gTimerInterval);
        gState.isGameOn = false;
        bestTimePerLevel();
    }
}

function bestTimePerLevel() {
    if (typeof (Storage) !== "undefined") {
        switch (gCurrLevel.size) {
            case 4:
                if (localStorage.bestTime4) { // if excists in storage for lvl easy
                    if (+localStorage.bestTime4 > gState.secsPassed) // if there is a new leader
                        localStorage.bestTime4 = gState.secsPassed;
                } else { // if doesn't excist make current the leader
                    localStorage.bestTime4 = gState.secsPassed;
                }
                document.querySelector('.best-time').innerHTML = localStorage.bestTime4;
                break;

            case 6:
                if (localStorage.bestTime6) { // if excists in storage
                    if (+localStorage.bestTime6 > gState.secsPassed) // if there is a new leader
                        localStorage.bestTime6 = gState.secsPassed;
                } else { // if doesn't excist make current the leader
                    localStorage.bestTime6 = gState.secsPassed;
                }
                document.querySelector('.best-time').innerHTML = localStorage.bestTime6;
                break;

            case 8:
                if (localStorage.bestTime8) { // if excists in storage
                    if (+localStorage.bestTime8 > gState.secsPassed) // if there is a new leader
                        localStorage.bestTime8 = gState.secsPassed;
                } else { // if doesn't excist make current the leader
                    localStorage.bestTime8 = gState.secsPassed;
                }
                document.querySelector('.best-time').innerHTML = localStorage.bestTime8;
                break;
            default:
                if (localStorage[`bestTime${gCurrLevel.size}`]) { // if excists in storage
                    if (+localStorage[`bestTime${gCurrLevel.size}`] > gState.secsPassed) // if there is a new leader
                        localStorage[`bestTime${gCurrLevel.size}`] = gState.secsPassed;
                } else { // if doesn't excist make current the leader
                    localStorage[`bestTime${gCurrLevel.size}`] = gState.secsPassed;
                }
                document.querySelector('.best-time').innerHTML = localStorage[`bestTime${gCurrLevel.size}`];
        }
    } else {
        document.querySelector('.best-time-line').innerHTML = "Sorry, your browser does not support web storage...";
    }
}

