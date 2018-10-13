const WALL = 'WALL';
const FLOOR = 'FLOOR';
const BALL = 'BALL';
const GAMER = 'GAMER';
const GLUE = 'GLUE';

const GAMER_IMG = '<img src="img/gamer.png">';
const BALL_IMG = '<img src="img/ball.png">';
const GLUE_IMG = '<img src="img/glue.png">';

const BALL_APPEAR_TIME = 3000; // in ms.
const GLUE_APPEAR_TIME = 2000; // in ms.
const GLUE_LAST_TIME = 3000; //in ms.

var gGamerPos;
var gBoard;

var gCurrNumOfBallsOnBoard;
var gCollectedBallsCount;
var gNewBallInterval;
var gNewGlueInterval;

function init() {
	gCurrNumOfBallsOnBoard = 2;
	gCollectedBallsCount = 0;
	gGamerPos = { i: 2, j: 5 };
	gBoard = buildBoard();
	renderBoard(gBoard);

	var elWinningMsg = document.querySelector('.winning');
	var elRestartBtn = document.querySelector('.btn-restart');
	elRestartBtn.style.display = 'none';
	elWinningMsg.style.display = 'none';
}

function buildBoard() {
	// Create the Matrix
	var board = new Array(10);
	for (var i = 0; i < board.length; i++) {
		board[i] = new Array(12);
	}

	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			var cell = { type: FLOOR, gameElement: null, isGlued: false };
			// Place Walls at edges
			if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
				cell.type = WALL;
			}
			board[i][j] = cell;
		}
	}

	// Make passages
	var rndPassage1PosJ = Math.floor(Math.random() * (8 - 1)) + 1;
	var rndPassage1PosI = Math.floor(Math.random() * (8 - 1)) + 1;
	board[0][rndPassage1PosJ].type = FLOOR;
	board[9][rndPassage1PosJ].type = FLOOR;
	board[rndPassage1PosI][0].type = FLOOR;
	board[rndPassage1PosI][11].type = FLOOR;

	// Place the gamer
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

	// Place the Balls
	board[3][8].gameElement = BALL;
	board[7][4].gameElement = BALL;

	console.log(board);
	return board;
}

// Render the board to an HTML table
function renderBoard(board) {

	var elBoard = document.querySelector('.board');
	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];

			var cellClass = getClassName({ i: i, j: j })

			if (currCell.type === FLOOR) cellClass += ' floor';
			else if (currCell.type === WALL) cellClass += ' wall';

			strHTML += '\t<td class="cell ' + cellClass + '"  onclick="moveTo(' + i + ',' + j + ')" >\n';

			if (currCell.gameElement === GAMER) {
				strHTML += '\t' + GAMER_IMG + '\n';
			} else if (currCell.gameElement === BALL) {
				strHTML += BALL_IMG;
			}

			strHTML += '\t</td>\n';
		}
		strHTML += '</tr>\n';
	}
	console.log('strHTML is:');
	console.log(strHTML);
	elBoard.innerHTML = strHTML;

	// New Ball Appearance
	gNewBallInterval = setInterval(addRandomBall, BALL_APPEAR_TIME);

	function addRandomBall() {
		var rndPosI = Math.floor(Math.random() * 9) + 1;
		var rndPosJ = Math.floor(Math.random() * 11) + 1;
		var rndCell = board[rndPosI][rndPosJ];
		if (rndCell.type === FLOOR && !rndCell.gameElement) {
			// Update Model
			rndCell.gameElement = BALL;
			gCurrNumOfBallsOnBoard++;

			// Update DOM
			var rndCellClass = getClassName({ i: rndPosI, j: rndPosJ });
			console.log('New ball placed!', rndCellClass);
			var elRndCell = document.querySelector(`.${rndCellClass}`);
			elRndCell.innerHTML = BALL_IMG;

		} else if (rndCell.gameElement === BALL || rndCell.type === WALL || rndCell.gameElement === GAMER || rndCell.isGlued) {
			clearInterval(gNewBallInterval);
			gNewBallInterval = setInterval(addRandomBall, BALL_APPEAR_TIME);
		}
	}

	// New Glue Appearance
	gNewGlueInterval = setInterval(addRandomGlue, GLUE_APPEAR_TIME);

	function addRandomGlue() {
		var rndPosI = Math.floor(Math.random() * 9) + 1;
		var rndPosJ = Math.floor(Math.random() * 11) + 1;
		var rndCell = board[rndPosI][rndPosJ];
		if (rndCell.type === FLOOR && !rndCell.gameElement) {
			// Update Model
			rndCell.isGlued = true;

			// Update DOM
			var rndCellClass = getClassName({ i: rndPosI, j: rndPosJ });
			console.log('New glue placed!', rndCellClass);
			var elRndCell = document.querySelector(`.${rndCellClass}`);
			elRndCell.innerHTML = GLUE_IMG;

		} else if (rndCell.gameElement === BALL || rndCell.type === WALL || rndCell.gameElement === GAMER || rndCell.isGlued) {
			clearInterval(gNewGlueInterval);
			gNewGlueInterval = setInterval(addRandomGlue, GLUE_APPEAR_TIME);
		}
		setTimeout(function () {
			if (rndCell.isGlued) {
				rndCell.isGlued = false;
				if (rndCell == board[gGamerPos.i][gGamerPos.j]) elRndCell.innerHTML = GAMER_IMG;
				else elRndCell.innerHTML = '';
				console.log('Removed Glue from: ', rndCellClass);
			}
		}, GLUE_LAST_TIME);
	}
}

// Move the player to a specific location
function moveTo(i, j) {
	
	// Passages
	gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
	renderCell(gGamerPos, '');
	if (i >= gBoard.length) {
		gGamerPos.i = i = 0;
		// moveTo(0, j);
	} else if (i < 0) {
		gGamerPos.i = i = gBoard.length - 1;
		// moveTo(gBoard.length - 1, j);
	}
	if (j >= gBoard[0].length) {
		gGamerPos.j = j = 0;
		// moveTo(i, 0);
	} else if (j < 0) {
		gGamerPos.j = j = gBoard[0].length - 1
		// moveTo(i, gBoard[0].length - 1);
	}
	gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
	renderCell(gGamerPos, GAMER_IMG);


	var targetCell = gBoard[i][j];
	if (targetCell.type === WALL) return;

	// Check for Glue
	if (gBoard[gGamerPos.i][gGamerPos.j].isGlued) {
		console.log('Player glued on: i:', gGamerPos.i, 'j:', gGamerPos.j);
		return;
	}

	// Calculate distance to ake sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i);
	var jAbsDiff = Math.abs(j - gGamerPos.j);


	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0)) {

		if (targetCell.gameElement === BALL) {
			gCollectedBallsCount++;
			var elCollectedBalls = document.querySelector('.collected-balls-num');
			elCollectedBalls.innerText = gCollectedBallsCount;
			console.log('Collecting!');
			// Sound effect
			var collectingSoundEffect = new Audio('sound/collect.mp3');
			collectingSoundEffect.play();
		}


		// Check for Winning
		if (gCurrNumOfBallsOnBoard === gCollectedBallsCount) {
			winning();
			console.log('winning');
			gCurrNumOfBallsOnBoard = 0;
		}

		// MOVING
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		renderCell(gGamerPos, '');

		gGamerPos.i = i;
		gGamerPos.j = j;

		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		renderCell(gGamerPos, GAMER_IMG);

	} // else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}

// Move the player by keyboard arrows
function handleKey(event) {
	var i = gGamerPos.i;
	var j = gGamerPos.j;

	switch (event.key) {
		case 'ArrowLeft':
			moveTo(i, j - 1);
			break;
		case 'ArrowRight':
			moveTo(i, j + 1);
			break;
		case 'ArrowUp':
			moveTo(i - 1, j);
			break;
		case 'ArrowDown':
			moveTo(i + 1, j);
			break;
	}
}

// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}


// Check if out of balls
function winning() {
	var elWinningMsg = document.querySelector('.winning');
	var elRestartBtn = document.querySelector('.btn-restart');
	elRestartBtn.style.display = 'inline-block';
	elWinningMsg.style.display = 'inline-block';
	clearInterval(gNewBallInterval);
	clearInterval(gNewGlueInterval);

}