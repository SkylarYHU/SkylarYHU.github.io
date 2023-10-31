'use strict';
let sercetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//添加了一个点击事件监听器
document.querySelector('.check').addEventListener('click', function () {
  //从用户处获得的信息数据类型为string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
    // document.querySelector('.message').textContent = '⛔️ No number!';
    //When player wins
  } else if (guess === sercetNumber) {
    displayMessage('🎉 Correct number!');
    //只有players猜出正确的随机数字时，才显示随机数
    document.querySelector('.number').textContent = sercetNumber;
    //以下更改的只是inline样式，并不涉及到CSS文件的更改
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //When guess is wrong
  } else if (guess !== sercetNumber) {
    if (score > 1) {
      displayMessage(guess > sercetNumber ? '🐑 Too high!' : '🔥 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔 You lost the game!');
      // document.querySelector('.message').textContent = '💔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  sercetNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
