const audio = new Audio('click.mp3');
let intervalId;
let tempo = 100;

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
    console.log(tempo);
}

const stopButton = document.getElementById('stop');
const tempoButton1 = document.getElementById('tempo-1');
const tempoButton2 = document.getElementById('tempo-2');
stopButton.addEventListener('click', stopMetronome);
tempoButton1.addEventListener('click', () => {
    tempo = 90;
    stopMetronome();
    startMetronome();
    setTempo(tempo);
});
tempoButton2.addEventListener('click', () => {
    tempo = 150;
    stopMetronome();
    startMetronome();
    setTempo(tempo);
});

setTempo(tempo);