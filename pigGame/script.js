'use strict';

const newGameButton = document.querySelector('.btn--new');
const acumulatorPoints = Array.from(document.querySelectorAll('.score'));//array type con los dos puntajes
const currentScore = document.querySelectorAll('.current-score')//aqui tambien;
const rollingDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dices = document.querySelector('.dice');
const players = document.querySelector('.player');
let allClassesPlayers = players.classList;
const score0 = document.querySelector('#score--0');//jonas
const score1 = document.getElementById('score--1');//jonas
const bothCurrentsWithClass = document.querySelectorAll('.current-score');






//let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

let acumulaCurrent = 0;
let activePlayer = 0;
let finalazo = [0, 0];
let verdades = true;

newGameAZero(dices, acumulatorPoints, currentScore);



    function newGameAZero(dados,...args) {
        
     args.forEach(ele => ele.forEach(el => el.textContent = 0));
    dados.classList.add('hidden');
};


function rollingDados() {
    
    
    
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    dices.classList.remove('hidden');
    dices.src = `dices/dice-${randomDiceNumber}.png`;
    
    if (verdades) {

        if (randomDiceNumber !== 1) {
       
            acumulaCurrent += randomDiceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = acumulaCurrent;
    
        } else {
      
            acumulaCurrent = 0
            document.getElementById(`current--${activePlayer}`).textContent = acumulaCurrent;
            activePlayer = activePlayer === 0 ? 1 : 0;
            document.querySelector(`.player--0`).classList.toggle('player--active');
            document.querySelector(`.player--1`).classList.toggle('player--active');
            // console.log(document.querySelector(`.player--${activePlayer}`))
        }
    } else {
        dices.classList.add('hidden');
    }
  
}

//Ask fide why does not work when putting the parameters in the function
newGameButton.addEventListener('click', () => {
    verdades = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
   
    acumulaCurrent = 0;
   // activePlayer = activePlayer === 1 ? 0 : 1;
    activePlayer = 0;
    newGameAZero(dices, currentScore, acumulatorPoints);
    finalazo = [0, 0];
    
});


rollingDiceButton.addEventListener('click', rollingDados);


holdButton.addEventListener('click', () => {
    
    if (verdades) {
   
        finalazo[activePlayer] += acumulaCurrent;
        document.getElementById(`score--${activePlayer}`).textContent = finalazo[activePlayer];
        acumulaCurrent = 0;
        document.getElementById(`current--${activePlayer}`).textContent = acumulaCurrent;
        document.querySelector(`.player--0`).classList.toggle('player--active');
        document.querySelector(`.player--1`).classList.toggle('player--active');

        if (finalazo[activePlayer] >= 10) {
            verdades = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            //document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            newGameAZero(dices);
            finalazo = [0, 0];
            
        } else {
            activePlayer = activePlayer === 0 ? 1 : 0;
        }
    }
});


