const audio = new Audio('click.mp3');
let intervalId;
let tempo = 120;

function playClick() {
  audio.currentTime = 0;
  audio.play();
}

function startMetronome() {
  const delay = 60000 / tempo;
  intervalId = setInterval(playClick, delay);
}

function stopMetronome() {
  clearInterval(intervalId);
}

function setTempo(newTempo) {
  tempo = newTempo;
  document.getElementById('tempo-display').textContent = `${tempo} BPM`;
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const tempo90Button = document.getElementById('tempo-90');
const tempo150Button = document.getElementById('tempo-150');
startButton.addEventListener('click', startMetronome);
stopButton.addEventListener('click', stopMetronome);
tempo90Button.addEventListener('click', () => setTempo(90));
tempo150Button.addEventListener('click', () => setTempo(150));
setTempo(tempo);