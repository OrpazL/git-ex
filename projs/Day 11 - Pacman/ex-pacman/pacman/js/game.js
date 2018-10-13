'use strict';
var WALL = '#';
var FOOD = '.';
var EMPTY = ' ';
var CHERRY = '&#8756;';

var gBoard;
var gState;
var foodAmount;

function init() {
  foodAmount = 0;
  gBoard = buildBoard();

  gState = {
    score: 0,
    isGameDone: false
  };
  updateScore(0);

  createPacman(gBoard);
  createGhosts(gBoard);

  printMat(gBoard, '.board-container');
  console.table(gBoard);

  // hide game over modal
  document.querySelector('.game-over-modal').style.visibility = 'hidden';
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;
      foodAmount++;

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j == 3 && i > 4 && i < SIZE - 2)) {
        foodAmount--;
        board[i][j] = WALL;
      }
    }
  }
  board[1][1] = CHERRY;
  board[board.length - 2][1] = CHERRY;
  board[1][board.length - 2] = CHERRY;
  board[board.length - 2][board.length - 2] = CHERRY;
  foodAmount += 40;
  foodAmount -= 4;

  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent) {
  if (cell === opponent) {
    // TODO: basic support for eating power-ball (which is not in the game yet)
    if (gPacman.isSuper) {
      console.log('Ghost is dead');
      return false;
    } else {
      clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      // TODO: GameOver popup with a play again button
      // alert('Game Over!');
      var elGameOverModal = document.querySelector('.game-over-modal');
      elGameOverModal.querySelector('span').innerText = 'Game Over!';
      elGameOverModal.style.visibility = 'unset';
      console.log('Game Over!');
      return true;
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  document.querySelector('header > h3 > span').innerText = gState.score;
}

function eating(ghost) {
  console.log(ghost)
  gBoard[ghost.location.i][ghost.location.j] = EMPTY;
}



