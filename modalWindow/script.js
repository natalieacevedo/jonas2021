'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const tresBotones = document.querySelectorAll('.show-modal');

let fromtresBotonesToArray = Array.from(tresBotones);// lo converti a array


function open() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closing() {
 modal.classList.add('hidden');
overlay.classList.add('hidden');
}



//aqui vemos la limitacion del document.querySelector, solo selecciona el primer boton, toca usarlo con all, devuelve una nodelist, it looks like an array, you can treat it like an array
//console.log(tresBotones);

fromtresBotonesToArray.forEach(el => el.addEventListener('click', open));

btnCloseModal.addEventListener('click', closing);

overlay.addEventListener('click', closing);

/*for (let i = 0; i < tresBotones.length; i++){
   console.log(tresBotones[i].textContent);
}
*/