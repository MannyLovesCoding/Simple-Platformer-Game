console.log('Script (Add Time)');

let time = 0;

function addTime() {
    if (document.getElementById('game-end').style.visibility == 'visible') {
        return;
    }
    const timeElement = document.getElementById('time');
    time += 1;
    timeElement.innerText = time;
}

setInterval(addTime, 1000);