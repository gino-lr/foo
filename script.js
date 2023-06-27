const audio = new Audio('click.mp3');
let intervalId;

let tempo1 = 90;
let tempo2 = 150;

function playClick() {
    audio.currentTime = 0;
    audio.play();
}

function startMetronome(_tempo) {
    const delay = 60000 / _tempo;
    intervalId = setInterval(playClick, delay);
}

function stopMetronome() {
    clearInterval(intervalId);
}


// STOP 
const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopMetronome);

// METRONOMO 1 Y 2
const tempoButton1 = document.getElementById('tempo-1');
const tempoButton2 = document.getElementById('tempo-2');

tempoButton1.addEventListener('click', () => {
    stopMetronome();
    startMetronome(tempo1);
    console.log(tempo1);
});
tempoButton2.addEventListener('click', () => {
    stopMetronome();
    startMetronome(tempo2);
    console.log(tempo2);
});

// Inrease and decrease tempo
const decreaseButton1 = document.getElementById("tempo-1-decrease");
const increaseButton1 = document.getElementById("tempo-1-increase");

const decreaseButton2 = document.getElementById("tempo-2-decrease");
const increaseButton2 = document.getElementById("tempo-2-increase");

decreaseButton1.addEventListener("click", () => {
    tempo1 -= 10;
    console.log(tempo1);
    tempoButton1.textContent = `${tempo1} BPM`;
    stopMetronome();
    startMetronome(tempo1);

});

increaseButton1.addEventListener("click", () => {
    tempo1 += 10;
    console.log(tempo1);
    tempoButton1.textContent = `${tempo1} BPM`;
    stopMetronome();
    startMetronome(tempo1);

});

decreaseButton2.addEventListener("click", () => {
    tempo2 -= 10;
    console.log(tempo2);
    tempoButton2.textContent = `${tempo2} BPM`;
    stopMetronome();
    startMetronome(tempo2);

});

increaseButton2.addEventListener("click", () => {
    tempo2 += 10;
    console.log(tempo2);
    tempoButton2.textContent = `${tempo2} BPM`;
    stopMetronome();
    startMetronome(tempo2);

});