const stoplight = document.getElementById('stoplight');
const walklight = document.getElementById('walklight');
const countdown = document.getElementById('countdown');
const btn = document.getElementById('btn');

const lightsToggle = () => {
  stoplight.classList.toggle('stop-on');
  stoplight.classList.toggle('stop-off');
  walklight.classList.toggle('walk-on');
  walklight.classList.toggle('walk-off');
};

const lightsHandler = () => {
  countdownHandler(3, 'cross now');
  setTimeout(() => {
    lightsToggle();
    countdownHandler(5, 'do not cross');
    setTimeout(() => {
      lightsToggle();
    }, '5000');
  }, '3000');
};

btn.addEventListener('click', lightsHandler);

const countdownHandler = (seconds, message) => {
  let timer = setInterval(() => {
    seconds -= 1;
    if (seconds <= 0) {
      clearInterval(timer);
      countdown.innerHTML = message;
    } else {
      countdown.innerHTML = seconds + ' seconds remaining';
    }
  }, 1000);
};
