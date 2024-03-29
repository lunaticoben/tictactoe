const gridOne = document.getElementById('grid1');
const gridTwo = document.getElementById('grid2');
const gridThree = document.getElementById('grid3');
const gridFour = document.getElementById('grid4');
const gridFive = document.getElementById('grid5');
const gridSix = document.getElementById('grid6');
const gridSev = document.getElementById('grid7');
const gridEig = document.getElementById('grid8');
const gridNine = document.getElementById('grid9');

const grid = document.getElementById('container');
const reset = document.getElementById('reset-btn');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');

const playerX = document.getElementById('playerx');
const playerO = document.getElementById('playero');
const playerXScore = document.getElementById('playerx-score');
const playerOScore = document.getElementById('playero-score');

let whosTurn = 1;
let Xscore = 0;
let Oscore = 0;

// Hide start modal
function hideStartModal() {
  modalContainer.style.display = 'none';
  resetGame();
}

// Add letter to grid on click
function addLetter(e) {
  if (e.path[0].innerHTML === '') {
    if (whosTurn % 2 === 0) {
      e.path[0].innerHTML = 'O';
      playerX.style.color = '#49fb35';
      playerO.style.color = '#dedede';
    } else {
      e.path[0].innerHTML = 'X';
      playerO.style.color = '#49fb35';
      playerX.style.color = '#dedede';
    }
  whosTurn++;
  checkWinner();
  // console.log(whosTurn);
  }
}

// Check for winner
function checkWinner() {
  // Stalemate
  if (whosTurn >= 10) {
    modalContainer.style.display = "block";
    modal.innerHTML = `Stalemate! Everyone loses!! :)<br />Click anywhere to play again...`;
  }

  // Hor 1
  if (gridOne.innerHTML !== '') {
    if (gridOne.innerHTML === gridTwo.innerHTML && gridTwo.innerHTML === gridThree.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridOne.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridOne.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Hor 2
  if (gridFour.innerHTML !== '') {
    if (gridFour.innerHTML === gridFive.innerHTML && gridFive.innerHTML === gridSix.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridFour.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridFour.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Hor 3
  if (gridSev.innerHTML !== '') {
    if (gridSev.innerHTML === gridEig.innerHTML && gridEig.innerHTML === gridNine.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridSev.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridSev.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Ver 1
  if (gridOne.innerHTML !== '') {
    if (gridOne.innerHTML === gridFour.innerHTML && gridFour.innerHTML === gridSev.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridOne.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridOne.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Ver 2
  if (gridTwo.innerHTML !== '') {
    if (gridTwo.innerHTML === gridFive.innerHTML && gridFive.innerHTML === gridEig.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridTwo.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridTwo.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Ver 3
  if (gridThree.innerHTML !== '') {
    if (gridThree.innerHTML === gridSix.innerHTML && gridSix.innerHTML === gridNine.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridThree.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridThree.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Diag 1
  if (gridOne.innerHTML !== '') {
    if (gridOne.innerHTML === gridFive.innerHTML && gridFive.innerHTML === gridNine.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridOne.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridOne.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }

  // Diag 2
  if (gridThree.innerHTML !== '') {
    if (gridThree.innerHTML === gridFive.innerHTML && gridFive.innerHTML === gridSev.innerHTML) {
      modalContainer.style.display = "block";
      modal.innerHTML = `Player ${gridThree.innerHTML} is the winner!!!! :)<br />Click anywhere to play again...`;
      if (gridThree.innerHTML === 'X') {
        Xscore++;
      } else {
        Oscore++;
      }
    } 
  }
  updateScores();
}

// Update scores
function updateScores() {
  playerXScore.innerHTML = Xscore;
  playerOScore.innerHTML = Oscore;
}

// Reset game
function resetGame() {
  for (let i = 1; i < 18; i+=2) {
    grid.childNodes[i].innerHTML = '';
  }
  whosTurn = 1;
  playerX.style.color = '#49fb35';
  playerO.style.color = '#dedede';
}


// Reset button
function resetButton() {
  resetGame();
  modalContainer.style.display = "block";
  modal.innerHTML = "Player X Goes First! :)<br />Click anywhere to begin!";
}

gridOne.addEventListener('click', addLetter);
gridTwo.addEventListener('click', addLetter);
gridThree.addEventListener('click', addLetter);
gridFour.addEventListener('click', addLetter);
gridFive.addEventListener('click', addLetter);
gridSix.addEventListener('click', addLetter);
gridSev.addEventListener('click', addLetter);
gridEig.addEventListener('click', addLetter);
gridNine.addEventListener('click', addLetter);

reset.addEventListener('click', resetButton);
modalContainer.addEventListener('click', hideStartModal);