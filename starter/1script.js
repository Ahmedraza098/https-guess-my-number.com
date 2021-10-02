'use strict';
let score = 5;
let secretnumber = Math.trunc(Math.random() * 10) + 1;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a Number!';
    document.querySelector('body').style.backgroundColor = '#8B0000';
  } else if (guess === secretnumber) {
    displaymessage('🎊 Correct Number');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? 'High' : 'Low');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      document.querySelector('.score').textContent = '0';
      displaymessage('You Lose!');
      document.querySelector('body').style.backgroundColor = 'Grey';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretnumber = Math.trunc(Math.random() * 10) + 1;
  displaymessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
});
