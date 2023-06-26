let intervalIds = [];

function startMetronome(id) {
    let tempo = document.getElementById(`tempo${id}`).value;
    let interval = 60000 / tempo;
    let intervalId = setInterval(() => {
        let clickSound = document.getElementById("clickSound");
        clickSound.currentTime = 0;
        clickSound.play();
    }, interval);
    intervalIds.push(intervalId);
}

function stopMetronome(id) {
    let index = id - 1;
    clearInterval(intervalIds[index]);
    intervalIds.splice(index, 1);
}