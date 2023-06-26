const audio = new Audio('click.mp3');
let intervalId;

function playClick() {
  audio.currentTime = 0;
  audio.play();
}

function startMetronome() {
  const tempo = document.getElementById('tempo').value;
  const delay = 60000 / tempo;
  intervalId = setInterval(playClick, delay);
}

function stopMetronome() {
  clearInterval(intervalId);
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
startButton.addEventListener('click', startMetronome);
stopButton.addEventListener('click', stopMetronome);