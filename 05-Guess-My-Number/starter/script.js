'use strict';

// what's the DOM and DOM manipulation
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
*/

/*
// handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
*/

// guess my number game
// before refactoring
/*
// generate a random number between 1-20
const generateNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateNumber();
let score = 20;
let highScore = 0;

// console.log(secretNumber);

// event listener for click event on the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // when player wins (guess the correct number)
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is higher than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🙁 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is lower than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🙁 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff3838';
    }
  }
});

// event listener for click event on the reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();
  //   console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

// after refactoring
// generate a random number between 1-20
const generateNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const diplayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayGuessNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

const setElementBackgroundColor = function (selector, color) {
  document.querySelector(selector).style.backgroundColor = color;
};

const setElementWidth = function (selector, width) {
  document.querySelector(selector).style.width = width;
};

// console.log(secretNumber);

// event listener for click event on the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // when player wins (guess the correct number)
  } else if (guess === secretNumber) {
    displayGuessNumber(secretNumber);
    displayMessage('🥳 Correct Number!');
    setElementBackgroundColor('body', '#60b347');
    setElementWidth('.number', '30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is different than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      diplayScore(score);
    } else {
      displayMessage('🙁 You lost the game!');
      setElementBackgroundColor('body', '#ff3838');
      diplayScore(0);
    }
  }
});

// event listener for click event on the reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();
  //   console.log(secretNumber);
  displayGuessNumber('?');
  displayMessage('Start guessing...');
  diplayScore(score);
  document.querySelector('.guess').value = '';
  setElementBackgroundColor('body', '#222');
  setElementWidth('.number', '15rem');
});
