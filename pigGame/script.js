'use strict';

const newGameButton = document.querySelector('.btn--new');
const acumulatorPoints = Array.from(document.querySelectorAll('.score'));//array type con los dos puntajes
const currentScore = Array.from(document.querySelectorAll('.current-score'))//aqui tambien;
const rollingDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dices = document.querySelector('.dice');


let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
let inicio = 0;

console.log(randomDiceNumber);



function newGameAZero() {
   
acumulatorPoints.forEach(element => {
    element.textContent = inicio;
});

currentScore.forEach(element => {
    element.textContent = inicio;
});
   


    dices.classList.add('hidden');
   
};


function rollingDados() {
    
    
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    dices.classList.remove('hidden');
    dices.src = `dices/dice-${randomDiceNumber}.png`;
    

}

newGameButton.addEventListener('click', newGameAZero);

rollingDiceButton.addEventListener('click', rollingDados);