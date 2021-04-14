'use strict';
console.log(document.documentElement);






///////////////////////////////////////
// Modal window
//Selecting elements: 
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');//returns html collection que tiene ese elemento
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById("section--1");
document.getElementsByClassName('btn')//tambien devuelve html live collection
console.log(allButtons);

//takes the user to section 1
buttonScrollTo.addEventListener('click', (e) => {
 /* const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  
  //SCROLLING
  window.scrollTo(s1coords.left, s1coords.top);
  old way to do it///lesson 185, I dont think I ever goona do it like this... I miss a lot of code

  */
  //new way:
  section1.scrollIntoView({ behavior: 'smooth' });
  

});

//CREATING AND INSERTING ELEMENTS:
//1.)insertAdjacentHTML ejemplo:
//modal.insertAdjacentHTML("beforebegin", '<p class="lapepa">donita pepis</p>');

//2) document.createElement('div'(o el elemento que uno quiera)), esto crea un dom element
//ejemplo:
//const message = document.createElement('div');// este elemento aun no esta en el dom, pero lo podemos usar para hacer cosas por ejemplo ponerle o quitarle etc classes:
//message.classList.add("cookie-message"); y obviament a esa clase le podemos anadir estilos etc
// o ponerle texmessage:
//message.textContent = "we use cookies for improved funcionality";
// o anadirle html :
//message.innerHTML = 'we use cookies for bla bla bla <button class="btn btn--close-cookie">Got it!</button>'

//header.prepend(message) esto anade el dom y el html message prepend vuelve message el first child de header;
//header.append(message)// esto lo vuelve el last child
// es una cosa o la otra no puede ser los dos, como una persona que no puede estar en dos sitios a la vez
// si queremos que este en los dos lados debemos hacer:
//header.append(message.cloneNode(true));// por lo general esto no lo queremos

//header.before(message)esto lo anade antes del header como un sibling
//header.after(message)esto despues como un sibling tambien

//DELETE ELEMENTS:
//document.querySelector('.btn--close-cookie').addEventListener('click', functio(){
  //message.remove();
//});

//Referencias de Natis, I horsed around with the concepts, uncomment to see:

/*





console.log(header);

let prue = header.insertAdjacentHTML('afterbegin', '<em class ="cursi">la cursiva bonita</em>');
let eme = document.querySelector('.cursi');

eme.textContent = 'yeii';
eme.style.color = 'red';
eme.style.fontSize = 'xx-large';
let a = document.getElementsByTagName('em');
console.log(a);


let pruebita = document.createElement('p');

pruebita.classList.add('clarapreci');

console.log(pruebita.classList);

pruebita.innerHTML = ('clara es la nena mas preci del universo <em class="igotit"> pepis linda </em>');

header.append(pruebita);
//modal.classList.remove('hidden');
let docs = document.querySelector('.clarapreci');
//docs.textContent = 'bellezaaa';
docs.style.fontSize = 'xx-large';
docs.style.color = 'orange';

//document.documentElement.backgroundColor = 'red'; ??;
console.log(pruebita.classList);

//LECCION 184
//STYLES:
docs.style.backgroundColor = 'red';
docs.style.width = '50%';

console.log(getComputedStyle(docs).color);//esto lee lo que le pidamos;
console.log(getComputedStyle(docs).height);//color, bla bla bla, lo que sea que uno ponga

docs.style.height = Number.parseFloat(getComputedStyle(docs).height, 10) + 80 + 'px';//no se porque hacerlo asi de enredado en vez de ponerlo directamente

//CSS CUSTOM PROPERTIES OR VARIABLES: 

console.log(document.documentElement);
document.documentElement.style.setProperty('--color-primary', 'orange');// el --color-primary is the name of the property
// el document.document selecciona todo se cambian todos los que tengan la --color-primary variable

//ATTRIBUTES:

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);//solo funciona con standar attributes de html, no con las que uno ponga
console.log(logo.className);
//esto si funciona con atributos que uno se haya inventado:
//logo.getAttribute("designer"); devuelve lo que uno puso en el html;
// setting de una en el javascript : 
logo.setAttribute('company', 'Bankist');
logo.getAttribute('src'); //esto devuelve el path  relativo
const link = document.querySelector('.twitter-link');
console.log(link.href);

//para cambiar los attributes:
logo.alt = 'gorgeous minimalist logo';

console.log(logo.alt);

//DATA ATTRIBUTES: atributos que uno pone empezando con la palabra data
console.log(logo.dataset.versionNumber)// we would see how useful this is later in the course

  //CLASSES esto ya lo sabemos:
logo.classList.add('bla', 'ble');//se pueden pasar varias separadas por comas
logo.classList.remove('bla');
logo.classList.toggle('bla');
logo.classList.contains('bla');

//para anadir classes tambien se puede hacer esto pero no lo hagas, que esto borra todo las demas classes que uno tenga:
//logo.className = 'clarita';




FINAL COMMENTS DE NATICA, DESCOMENTE!!

*/




const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



btnsOpenModal.forEach(el => el.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
