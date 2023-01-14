// Movement DONE
// Boundaries DONE
// Time DONE
// Collect Coins 
// Animations 


console.log('Script Working');
let yaxis = 0;
let xaxis = 0;
let coins = 0;
let gameHasEnded;
const speed = 20;
function move(direction) {
    console.log('Move Script Working.');
    const character = document.getElementById('character'); 
    if (gameHasEnded) {
        return;
    }
    switch (direction) {
        case 'left':
            if (character.style.right == 0 || character.style.right == '0px') {
                break;
            }
            runAnimation();
            xaxis += speed;
            character.style.right = `${xaxis}px`;
            console.log(xaxis + 'x');
            break;
        case 'right':
            if (character.style.right == -540 || character.style.right == '-540px') {
                break;
            }
            runAnimation();
            xaxis -= speed;
            character.style.right = `${xaxis}px`;
            console.log(xaxis + 'x');
            break;
        case 'up':
            if (character.style.bottom == 0 || character.style.bottom == '0px') {
                break;
            } 
            runAnimation();
            yaxis += speed;
            character.style.bottom = `${yaxis}px`;
            console.log(yaxis + 'y');
            break;
        case 'down':
            if (character.style.bottom == -400 || character.style.bottom == '-400px') {
                break;
            }
            runAnimation();
            yaxis -= speed;
            character.style.bottom = `${yaxis}px`;
            console.log(yaxis + 'y');
            break;
    }
    // Coin Detection
    // Movement (-420 right) (-160 bottom)
    const hasCoin = (!coins == 0) ? true : false; // Checks if person has coins
    if (character.style.right == '-420px' && character.style.bottom == '-160px' && !hasCoin) {
        console.log('Coin Detected');
        const coin = document.getElementById('coin');
        const coinStats = document.getElementById('coinStats');
        coins += 1;
        coinStats.innerHTML = coins;
        coin.style.visibility = 'hidden';
    }
    if (character.style.right == '-400px' && character.style.bottom == '-300px') {
        if (coins >= 1) {
            console.log(`You've won the game`);
            gameEnd();
        } else {
            console.log('Collect the coin first to advance');
            notEnoughCoins();
        }
        console.log('Castle Detected');
    }
}

function run() {
    console.log('Run Animation');
    const character = document.getElementById('character');
    character.src = './animations/Run.png';
}

function idleAnimation() {
    const character = document.getElementById('character');
    character.src = './animations/Idle.png';
}

function runAnimation() {
    run();
    setTimeout(idleAnimation, 100);
}

function gameEnd() {
    console.log('Game end animation');
    document.getElementById('game-end').style.visibility = 'visible';
    document.getElementById('players-time').textContent = document.getElementById('time').innerHTML;
    gameHasEnded = true;
}

function notEnoughCoins() {
    const warning = document.getElementById('not-enough-coins');
    warning.style.visibility = 'visible';   
    setTimeout(changeOpacity, 500);
    setTimeout(secondOpacityChange, 1000);
    setTimeout(changeVisibility, 1001);
    warning.style.opacity = 1;
}

function changeOpacity() {
    const warning = document.getElementById('not-enough-coins');
    warning.style.opacity = 0.50;
}

function secondOpacityChange() {
    const warning = document.getElementById('not-enough-coins');
    warning.style.opacity = 0;
}

function changeVisibility() {
    document.getElementById('not-enough-coins').style.visibility = 'hidden';
}

function restart() {
    location.reload();
}