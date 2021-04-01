'use strict';

const newGameButton = document.querySelector('.btn--new');
const acumulatorPoints = Array.from(document.querySelectorAll('.score'));//array type con los dos puntajes
const currentScore = Array.from(document.querySelectorAll('.current-score'))//aqui tambien;
const rollingDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dices = document.querySelector('.dice');
const players = document.querySelector('.player');
let allClassesPlayers = players.classList;
const score0 = document.querySelector('#score--0');//jonas
const score1 = document.getElementById('score--1');//jonas
const bothCurrentsWithClass = document.querySelectorAll('.current-score');




//let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
let inicio = 0;
let acumulaCurrent = 0;
let activePlayer = 0;

newGameAZero(dices, acumulatorPoints, currentScore);



    function newGameAZero(dados,...args) {
 
     args.forEach(ele => ele.forEach(el => el.textContent = inicio));
    dados.classList.add('hidden');
};


function rollingDados() {
    
    
    
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    dices.classList.remove('hidden');
    dices.src = `dices/dice-${randomDiceNumber}.png`;
    


    if (randomDiceNumber !== 1) {
       
        acumulaCurrent += randomDiceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = acumulaCurrent;
       // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    } else {
       // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        acumulaCurrent = 0
        document.getElementById(`current--${activePlayer}`).textContent = acumulaCurrent;
        activePlayer = activePlayer === 0 ?  1 : 0;
        document.querySelector(`.player--0`).classList.toggle('player--active');
        document.querySelector(`.player--1`).classList.toggle('player--active');
        console.log(document.querySelector(`.player--${activePlayer}`))
   }
  
}

//Ask fide why does not work when putting the parameters in the function
newGameButton.addEventListener('click', () => {
    newGameAZero(dices, currentScore, acumulatorPoints);
});


rollingDiceButton.addEventListener('click', rollingDados);