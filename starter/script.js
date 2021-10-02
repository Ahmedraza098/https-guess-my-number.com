'use strict';
/*
document.querySelector('.message').textContent = `Add a Number!`;
document.querySelector('.score').textContent = 34;
document.querySelector('.guess').value = 23; */
let score = 5;
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displaymessage('Not a number!');
  } else if (guess === secretNumber) {
    displaymessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displaymessage(guess > secretNumber ? 'High!' : 'Low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displaymessage(`You lose the game!`);
    document.querySelector('.score').textContent = 0;
  }

  // we can use this upper statement ⬆⬆⬆⬆⬆⬆⬆⬆  to make code nice and donot voilet the rule of repeat it self   ⬇⬇⬇⬇⬇⬇⬇⬇

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `You lose the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `You lose the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  console.log(guess, typeof guess);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  displaymessage(' Start Guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
