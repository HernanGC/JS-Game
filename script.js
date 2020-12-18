'use strict';

const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const bodyEl = document.querySelector('body');



let randomNumber = String(Math.floor(Math.random() * 20));
console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    console.log(guess);
    let win = false;
    if (guess && String(guess) == String(randomNumber)) {
        win = true;
        console.log('coso');
    }
    if (win) {
        console.log('cosoagain');
        numberEl.textContent = randomNumber;
        messageEl.textContent = 'You win!';
        bodyEl.style.backgroundColor = '#60b347';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    const counter = [1, 2, 3];
    numberEl.textContent = '?';
    document.querySelector('.guess').value = '';
    messageEl.textContent = 'Start guessing...';
    bodyEl.style.backgroundColor = '#222';
});