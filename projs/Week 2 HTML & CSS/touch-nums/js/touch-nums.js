// console.log(createBoard());
var gBoard;
var gCurrNum;
var gBoardSize;
var gTimerInterval;

function init() {
    gBoard = createBoard();
    gCurrNum = 1;
    renderBoard(gBoard);
}

function startGame(level) {
    switch (level) {
        case 1:
            gBoardSize = 4;
            break;
        case 2:
            gBoardSize = 5;
            break;
        case 3:
            gBoardSize = 6;
            break;
    }
    init();
    clearInterval(gTimerInterval);
    timer();
    document.querySelector('.modal').style.display = 'none';
}

function changeLevelBtn() {
    var elModal = document.querySelector('.modal');
    if (elModal.style.display === 'none') {
        elModal.style.display = 'block';
    }
    else {
        elModal.style.display = 'none';
    }

}


function createBoard() {
    var board = [];
    var nums = [];
    for (var i = 0; i < gBoardSize ** 2; i++) {
        nums.push(i + 1);
    }
    shuffle(nums);

    for (var i = 0; i < gBoardSize; i++) {
        board.push([])
        for (var j = 0; j < gBoardSize; j++) {
            board[i][j] = nums.pop();
        }
    }
    return board;
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[i].length; j++) {
            strHTML += '<td onclick="checkNum(this)">'
            strHTML += board[i][j]
            strHTML += '</td>'
        }
        strHTML += '</tr>';
    }

    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

//shuffle array
function shuffle(nums) {
    var j, x, i;
    for (i = nums.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = nums[i];
        nums[i] = nums[j];
        nums[j] = x;
    }
    return nums;
}

function checkNum(elNum) {
    if(gCurrNum === 1) timer();
    if (+elNum.innerText === gCurrNum) {
        elNum.innerText = 'V';
        elNum.style.backgroundColor = 'lightgreen';
        gCurrNum++;
    }
    if (gCurrNum === 17) {
        clearInterval(gTimerInterval);
        alert('Congratulations!');
    }
}

function timer() {
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    gTimerInterval = setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}