// Bingo

console.log('Ex 59 Solution');

var gPlayers = [
    { name: 'Player 1', hitsCount: 0, board: createBingoBoard() },
    { name: 'Player 2', hitsCount: 0, board: createBingoBoard() }
];
var gNums = [];
var pos = {pi: 0 , pj: 0};

playBingo();

console.log('Player 1 starting board: ');
printBingoBoard(gPlayers[0].board);
console.log('Player 2 starting board: ');
printBingoBoard(gPlayers[1].board);

function createBingoBoard() {
    resetNums(gNums);
    var board = [[], [], [], [], []];
    var nums = [];
    var numsLimit = 99;
    // console.log(rand);
    for (var i = 0; i < 5; i++) {
        // var line = '';
        for (var j = 0; j < 5; j++) {
            var rand = Math.floor(Math.random() * numsLimit) + 1;
            while (nums[rand]) {
                rand = Math.floor(Math.random() * numsLimit) + 1;
                if (nums.length === 25) break;
            }
            nums[rand] = rand;
            board[i][j] = {
                value: rand,
                isHit: false
            };
            // line += board[i][j] + '\t';
        }
        // console.log(line);
    }
    // console.log(board);
    return board;
}

function printBingoBoard(board) {
    for (var i = 0; i < 5; i++) {
        var line = '';
        for (var j = 0; j < 5; j++) {
            // line += board[i][j].value + '\t';
            if (board[i][j].isHit) {
                line += 'V\t';
            } else {
                line += board[i][j].value + '\t';
            }
        }
        console.log(line);
    }
}

function playBingo() {
    resetNums(gNums);
    var isVictory = false;
    var completedRowsCount = 0;
    var completedColsCount = 0;
    var completedPrimaryDiagonalCount = 0;
    var completedSecondaryDiagonalCount = 0;
    var gameInterval = setInterval(playTurn, 1);
    
    // while (!isVictory) { playTurn(); }
    function playTurn() {
        var calledNum = drawNum();
        for (var i = 0; !isVictory && i < gPlayers.length; i++) {

            var player = gPlayers[i];
            markBoard(player, calledNum);
            //check for row
            if (completedRowsCount < 10 && checkRow(player)) {
                completedRowsCount++;
                console.log(player.name, ' has completed a row!');
            }

            //check for col
            if (completedColsCount < 10 && checkCol(player)) {
                completedColsCount++;
                console.log(player.name, ' has completed a col!');
            }

            //check for primary diagonal
            if (completedPrimaryDiagonalCount < 2 && checkPrimaryDiagonal(player)) {
                completedPrimaryDiagonalCount++;
                console.log(player.name, ' has completed main diagonal!');
            }
            //check for secondary diagonal
            if (completedSecondaryDiagonalCount < 2 && checkSecondaryDiagonal(player)) {
                completedSecondaryDiagonalCount++;
                console.log(player.name, ' has completed secondary diagonal!');
            }
            isVictory = checkBingo(player);
            if (isVictory) {
                //winning message
                console.log(player.name, ' has won the game!');

                //stop the game
                clearInterval(gameInterval);

                //print winning boards:
                console.log('Player 1 board: ');
                printBingoBoard(gPlayers[0].board);
                console.log('Player 2 board: ');
                printBingoBoard(gPlayers[1].board);
            }
        }
    }
}

function drawNum() {
    var num = Math.floor(Math.random() * 99) + 1;
    while (gNums[num]) {
        num = Math.floor(Math.random() * 99) + 1;
        if (gNums.length === 25) break;
    }
    gNums[num] = num;
    return num;
}

function resetNums(nums) {
    nums = [];
}

function markBoard(player, calledNum) {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var currNum = player.board[i][j];
            if (calledNum === currNum.value) {
                currNum.isHit = true;
                pos.pi = i;
                pos.pi = j;
                player.hitsCount++;
            }
        }
    }
}

function checkRow(player) {
    // console.log(pos.i)
    // for (var i = pos.i; i < player.board.length; i++) {
        for (var j = 0; j < player.board[pos.pi].length; j++) {
            if (!player.board[pos.pi][j]) return false;
        }
    // }
    return true;
}

function checkCol(player) {
    // console.log(pos.i)
    // for (var i = pos.i; i < player.board.length; i++) {
        for (var i = 0; i < player.board.length; i++) {
            if (!player.board[i][pos.pj]) return false;
        }
    // }
    return true;
}

function checkPrimaryDiagonal(player) {
    for (var i = 0; i < player.board.length; i++) {
        if (!player.board[i][i]) return false;
    }
    return true;
}

function checkSecondaryDiagonal(player) {
    for (var i = 0; i < player.board.length; i++) {
        if (!player.board[i][player.board[i].length - i - 1]) return false;
    }
    return true;
}

function checkBingo(player) {
    return (player.hitsCount === 25);
}









