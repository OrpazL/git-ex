var gPacman;
var PACMAN = '<img src="img/pacman.png">';


function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  // console.log('eventKeyboard:', eventKeyboard);

  if (gState.isGameDone) return;

  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j
  };

  var direction = '';
  switch (eventKeyboard.code) {

    case 'ArrowUp':
      //console.log('Arrow Up!');
      direction = 'up';
      nextLocation.i--;
      break;
    case 'ArrowDown':
      //console.log('Arrow Down!');
      direction = 'down';
      nextLocation.i++;
      break;
    case 'ArrowLeft':
      //console.log('Arrow Left!');
      direction = 'left';
      nextLocation.j--;
      break;
    case 'ArrowRight':
      //console.log('Arrow Right!');
      direction = 'right';
      nextLocation.j++;
      break;

  }
  rotatePacman(direction);

  var nextCell = gBoard[nextLocation.i][nextLocation.j];
  // console.log('Heading: row:', newLocation.i , ' col: ', newLocation.j );
  // console.log('Whats there:', gBoard[newLocation.i][newLocation.j]);

  // hitting a wall, not moving anywhere
  if (nextCell === WALL) return;

  // hitting FOOD
  if (nextCell === FOOD) {
    updateScore(1);
  }
  if (nextCell === CHERRY) {
    updateScore(10);
    gPacman.isSuper = true;
    setTimeout(function () {
      gPacman.isSuper = false;
    }, 5000);
  }
  if (gState.score >= foodAmount - 1) {
    gState.isGameDone = true;
    var elGameOverModal = document.querySelector('.game-over-modal');
    elGameOverModal.querySelector('span').innerText = 'Congrats! You Won!';
    elGameOverModal.style.visibility = 'unset';
  }

  // TODO: add support for power-food
  if (gPacman.isSuper) {
    
  }

  // update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

  // render updated model to the DOM
  renderCell(gPacman.location, EMPTY);

  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;


  // render updated model to the DOM
  renderCell(gPacman.location, PACMAN);

  // Rotate to direction
  rotatePacman(direction);

  var isGameOver = checkEngage(nextCell, GHOST);
  if (isGameOver) return;
  if (isGameOver === 0) {

  }
}

function rotatePacman(direction) {
  var elPacman = document.querySelector('.board-container img');
  switch (direction) {
    case 'up':
      elPacman.style.transform = 'rotate(270deg)';
      break;
    case 'down':
      elPacman.style.transform = 'rotate(90deg)';
      break;
    case 'left':
      elPacman.style.transform = 'rotate(180deg)';
      break;
    case 'right':
      elPacman.style.transform = 'rotate(0deg)';
      break;
  }
}