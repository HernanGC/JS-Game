'use strict';

const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const bodyEl = document.querySelector('body');
let startingScore = 20;
let score = document.querySelector('.score');

const randomizer = function () {
    return String(Math.floor(Math.random() * 20));
}

const startOver = function () {
    numberEl.textContent = '?';
    document.querySelector('.guess').value = '';
    messageEl.textContent = 'Start guessing...';
    bodyEl.style.backgroundColor = '#222';
    randomNumber = randomizer();
}

let randomNumber = randomizer();
console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    console.log(guess);
    let win = false;
    if (guess && String(guess) == String(randomNumber)) {
        win = true;
        console.log('coso');
    } else {
        score.textContent -= 1;
    }
    if (win) {
        console.log('cosoagain');
        numberEl.textContent = randomNumber;
        messageEl.textContent = 'You win!';
        bodyEl.style.backgroundColor = '#60b347';
        return;
    }
});



document.querySelector('.again').addEventListener('click', startOver());