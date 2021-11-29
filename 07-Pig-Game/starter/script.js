'use strict';
// pig game

// selecting elements
// using querySelector with id selector
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
// using getElementById method when dealing with id's is faster
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// declare variables
let totalScores, currentScore, activePlayer, playing;

// strating conditions
const init = function () {
  totalScores = [0, 0]; // player 1 score is at index 0 and player 2 is at index 1
  currentScore = 0;
  activePlayer = 0; // start game with player 1
  playing = true; // state of game

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  document.getElementById('name--0').textContent = 'player 1';
  document.getElementById('name--1').textContent = 'player 2';
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle will add class to element if not exists and remove it if exists
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const displayWinner = function () {
  document.getElementById(`name--${activePlayer}`).textContent += '🏆';
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// hold score functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's total score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    // check if player's score is >= 100
    if (totalScores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      displayWinner();
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// reset game to inital state
btnNew.addEventListener('click', init);
