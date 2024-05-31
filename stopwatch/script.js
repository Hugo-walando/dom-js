let timeDisplay = document.querySelector('#time');
let startBtn = document.querySelector('#start-btn');
let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const startTimer = () => {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
  }
};

const stopTimer = () => {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  running = false;
};

const resetTimer = () => {
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  running = false;
  timeDisplay.textContent = `00:00:00`;
};

const updateTimer = () => {
  const now = Date.now();
  elapsedTime = now - startTime;

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function pad(number) {
  return number.toString().padStart(2, '0');
}
