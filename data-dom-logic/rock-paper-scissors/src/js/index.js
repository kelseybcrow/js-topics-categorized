const scoreHumanEl = document.querySelector('.score-human');
const scoreBotEl = document.querySelector('.score-bot');
const choiceHumanEl = document.querySelector('.choice-human');
const choiceBotEl = document.querySelector('.choice-bot');
const resultEl = document.querySelector('.result-current');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let humanScore = 0;
let botScore = 0;
let result;

const getBotPlay = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

const play = (humanPlay) => {
  let botPlay = getBotPlay();
  // game logic
  if (humanPlay == 'rock') {
    if (botPlay == 'rock') result = 'tie';
    if (botPlay == 'paper') {
      botScore++;
      result = 'lost';
    }
    if (botPlay == 'scissors') {
      humanScore++;
      result = 'won';
    }
  }
  if (humanPlay == 'paper') {
    if (botPlay == 'paper') result = 'tie';
    if ((botPlay = 'scissors')) {
      botScore++;
      result = 'lost';
    }
    if (botPlay == 'rock') {
      humanScore++;
      result = 'won';
    }
  }
  if (humanPlay == 'scissors') {
    if (botPlay == 'scissors') result = 'tie';
    if (botPlay == 'paper') {
      humanScore++;
      result = 'won';
    }
    if (botPlay == 'rock') {
      botScore++;
      result = 'lost';
    }
  }

  // update scores, choices, and results on page
  scoreHumanEl.textContent = `${humanScore}`;
  scoreBotEl.textContent = `${botScore}`;

  choiceHumanEl.textContent = `${humanPlay}`;
  choiceBotEl.textContent = `${botPlay}`;

  resultEl.textContent = `${result}`;
};

rock.addEventListener('click', () => {
  play('rock');
});
paper.addEventListener('click', () => {
  play('paper');
});
scissors.addEventListener('click', () => {
  play('scissors');
});
