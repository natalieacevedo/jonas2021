'use strict';
/*
console.log(document.querySelector('.message').textContent);// selecciona el elemento, dentro de los parentesis se pone tal cual en css

//el text content lee el texto

document.querySelector('.message').textContent = 'Correctisimo Number!';// asi se cambia el texto;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 24;//se manipula el valor;

console.log(document.querySelector('.guess').value);//lee el valor;

*/
let secret = Math.trunc(Math.random() * 20) + 1;
console.log = secret;

let score = 20;

let highScore = 0;

function score






//HANDLING CLICK EVENTS!!!!!!!!

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'please put a valid input'
    }

    //when player wins the game
    else if (secret === guess) {
        document.querySelector('.number').textContent = secret;
        document.querySelector('.message').textContent = 'You are correct'
        //asi se cambia style de css :)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };
        
        //when input is higher than secret number
    } else if (guess !== secret) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secret ? 'Too high!' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
    
        else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }



    }
    
});
    

 //el event listener toma como segundo argumento una funcion en donde uno le dice que quiere que pase cuando se clickea o lo que sea el evento

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = score;
    
    document.querySelector('.guess').value;
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.highscore').textContent = highScore;
});