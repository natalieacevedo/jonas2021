'use strict';
console.log(document.documentElement);






///////////////////////////////////////
// Modal window
//Selecting elements: 
//const mainLogo = document.querySelector('#logo');
const mainNavLinks = document.querySelector('.nav');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');//returns html collection que tiene ese elemento
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById("section--1");
document.getElementsByClassName('btn')//tambien devuelve html live collection;

//TYPES OF EVENTS AND EVENTS HANDLERS LECCION 186

const h1 = document.querySelector('h1');

//anadir el remove event listener pa solo oir el evento once, se puede anadir en cualquier punto del codigo, por ejemplo jonas lo hizo despues de cierto tiempo con el settimeout function;

const alertH1 = e => { alert('nat ala '); };
//asi es como siempre lo hemos hecho y la mejor forma de hacerlo:
h1.addEventListener('mouseenter',alertH1);

//otra forma: muy facil pero no me gusta mucho la sintax; esta todols los eventos teclado,click etc esta forma es la old school mejor usar la otra:
//h1.onmouseenter = e => alert('ole babe');

//vamos  a quitar el event listener despues de cierto tiempo:

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//tambien se pueden poner los event listeners directamente en el html pero el no lo recomienda, lo muestra pa que lo sepamos

//EVENT PROPAGATION, BUBBLING AND CAPTURING LECTURE 187// pura teoria

/////////////////////////////////////////////////////////////////////////////////

//EVENT PROPAGATION PRACTICE LECTURE 188:
//queremos generar un random color en el navigation

//rgb(255,255,255) como sabemos esto crea un color de acuerdo a los valores que se pasemn, entonces:

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//console.log(randomInt(15, 7));

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

//console.log(randomColor());// esto produce un color random;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget)//target es donde el evento paso
  e.stopPropagation(); //para el evento ahi;
});


document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget)
  e.stopPropagation(); //para que pase solo ahi y su papa no haga parte del evento que esta pasando en practica casi no se usa pero ahi esta en caso que lo necesitemos
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget)
  e.stopPropagation();
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EVENT DELEGATION LECTURE 189
//PAGE NAVIGATION WITHOUT EVENT DELEGATION:

const navigationLinks = document.querySelectorAll('.nav__link');

console.log(navigationLinks);

/*

navigationLinks.forEach(el => el.addEventListener('click',function (e){
  e.preventDefault();// esto muy importante, para que se pare de hacer lo que esta por default y se haga lo que uno quiere
  //en este caso el anchor con html
 
 // MI SOLUCION QUE FUNCIONA: document.querySelector(`#section--${ind + 1}`).scrollIntoView({ behavior: 'smooth' });
//JONAS:
  const id = this.getAttribute('href'); //coge el atributo href de cada uno de los navigation links
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}));

*/


/////////PAGE NAVIGATION WITH EVENT DELEGATION:MAS EFICIENTE QUE PEGARLE UN EVENT LISTENER A CADA UNO
//MEJOR SE LE HACE AL PAPA QUE TODOS TENGAN EN COMUN

//MI SOLUCION, FUNCIONA://///////////////////////////////////////////////////////////////////////////////////////

/*
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();
  let pasoEvento = e.target;
  let atributo = pasoEvento.getAttribute('href');
  console.log(e);
  console.log(pasoEvento);
  console.log(atributo);

  document.querySelector(atributo).scrollIntoView({ behavior: 'smooth' });
});

*/

//SOLUCION DE JONAS:
//1.Add event listener to common parent element
//2.Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //e.target es donde el evento sucedio
  //MATCHING STRAGEGY PORQUE QUEREMOS IGNORAR CLICKS QUE NO PASEN EN UNO DE LOS LINKS,(OSEA AFUERA);
  if (e.target.classList.contains('nav__link')) {
    //e.target.getAttribute('href').scrollIntoView({ behavior: 'smooth' });
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM TRAVERSING LECTURE 190////////////////////////////////////////////////////////////
// ES CAMINAR POR EL DOM, ESTE VIDEO VA A SER UN VIDEO REFERENCIA
//vamos a trabajar con el h1 de la pagina, esta arriba, mire alla arriba y lo encontrara.

//1. GOING DOWNWARDS: CHILD
console.log(h1.querySelectorAll('.highlight'));//esto devuelve un nodelist con todos los childelements del h1.si hubiese
//otros elementos con la clase de hightlight no los devolveria porque estamos solo usando el queryselector en el h1
console.log(h1.childNodes)//devuelve una lista con todas las cositas que tiene adentro el h1;casi no es muy util
console.log(h1.children); //esto da una html collection con los elementos que tiene el h1;
console.log(h1.firstElementChild);//devuelve el primer chiquillo del h1

//vamos a usarlo:

h1.firstElementChild.style.color = 'orange';
h1.lastElementChild.style.color = 'red';

//2. GOING UPWARDS: PARENTS:

console.log(h1.parentNode);//devuelve el node papa.
console.log(h1.parentElement);//devuelve el papa elemento en este caso es lo mismo que el papa node

//digamos que tenemos muchos elementos con la class of 'header', entonces para encontrar el que este mas cerca usamos:
//se puede pensar como lo contrario de query selector, queryselector encuentra children y closest parents
h1.closest('.header')//recibe un string como query selector y query selectorAll

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'beige';//en este caso el closest h1 es el mismo;

//3. GOING SIDE WAYS: SIBLINGS
// in javascript we can only access direct siblings only the previus and the nextone

console.log(h1.previousElementSibling);// este por ejemplo da null porque es el primer guerquillo del elemento que lo contiene osea su papa
console.log(h1.nextElementSibling);

//esto nodes, casi no se trabaja con ellos pero bueno para tener esto completo:

console.log(h1.previousSibling);
console.log(h1.nextSibling);
//////////////////////////////////////////////////////////////////////////////////
//ESTE ES UN TRUQUILLO MUY USADO MOVE TO THE PARENT ELEMENT AND HAVE ALL ITS CHILDREN FROM THERE, INCLUDES ITSELF
//DEVUELVE HTML COLLECTION QUE PODEMOS CONVERTIR FACILMENT A ARRAY, (eso ya lo se:)
console.log([...h1.parentElement.children]);
console.log(Array.from(h1.parentElement.children));
console.log(h1.parentElement.children);

//vamos a hacer algo just for fun:
/*
Array.from(h1.parentElement.children).forEach(el => {
  if (el !==h1) {
    el.style.transform = 'scale(0.5)';//los convirtio 50% smaller
  }
});

*/

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BUILDING A TABBED COMPONENT LECTURE 191

//1. primero coger todas las tabs:
const tabs = document.querySelectorAll('.operations__tab');
console.log(tabs);
//it's container:
const tabsContainer = document.querySelector('.operations__tab-container');
console.log(tabsContainer);
//el contenidoz;
const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabsContent);


// se podria una a una las tabs, pero mas eficiente irse al papa y hacer lo del target

tabsContainer.addEventListener('click', (e) => {
  e.preventDefault();
  let elementito = e.target.closest('.operations__tab');//esto en caso que sea un elemento diferente al boton, pone al boton que queremos, el mas cerca closest da null si la clase no la tienen papas o grandparents del elemento
  console.log(elementito);
  if (!elementito) {
    return// osea si a nada se le hizo click, a ninguno de los botones, terminese la funcion de una vez, osea que no pase nada.
  }
  //quitarle la clase active a todos los botones
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  
// y luego ponerle la clase active solo al boton que se le dio click
  elementito.classList.add('operations__tab--active');
  
  //ahora vamos a activar el content area:
  //este es el atributo hecho por jonas, !!al que yo no sabia como acceder!!
  let claseHecha = elementito.dataset.tab;//el contenido es un numero que necesitamos para display el contenido
  console.log(claseHecha);
  console.log(tabsContent);
 // document.querySelector(`.operations__content--${claseHecha}`).classList.add////('operations__content--active');
  
  //activar y quitar la active clase, yo lo hice ahi de una vez y funciona:

  tabsContent.forEach(el => {

    if (el === document.querySelector(`.operations__content--${claseHecha}`)) {
      el.classList.add('operations__content--active')
    } else {
      el.classList.remove('operations__content--active')
    }
  });

//jonas hizo un for each tambien pero le quito la clase a todas y luego afuera del for each se la puso al que le habian hecho click

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PASSING ARGUMENTS TO EVENT HANDLERS LECTURE 192: PASSING ARGUMENTS TO EVENT HANDLERS

//menu fade animation:

function dontDry(evento) {
  
 // const logo = evento.target.closest('.nav').querySelector('img');

  if (evento.target.classList.contains('nav__link')) {
    let link = evento.target;
    let siblings = link.closest('.nav').querySelectorAll('.nav__link');
   const logo = link.closest('.nav').querySelector('img');
    
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  } 


};



console.log(mainNavLinks);

mainNavLinks.addEventListener('mouseover', dontDry.bind(0.5));
  /*

 // let ocurrioElClick = e.target.closest('.nav__link'); mejor sin el closest porque en este caso no hay child elements we can accidentally click, en el otro nav lo hicimos con el closest por el span que habia adentro, asi lo hizo Jonas:
 // let arriba = e.target.closest('#logo');
 const logo = e.target.closest('.nav').querySelector('img');
  console.log(logo);
  
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let siblings = link.closest('.nav').querySelectorAll('.nav__link');
   // const logo = link.closest('.nav').querySelector('img');
    console.log(siblings);
    
   
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
    logo.style.opacity = 0.5;

    //siblings.forEach(el => el.style.opacity = 1);

  } 

*/


mainNavLinks.addEventListener('mouseout', dontDry.bind(1));
  
  /*
  let hermanitos = e.target.closest('.nav').querySelectorAll('.nav__link');

  hermanitos.forEach(el => {
    el.style.opacity = 1;
  })

  logo.style.opacity = 1;

  */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LECTURE 193 IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT:

//NAVIGATION BECOMES ATTACHED ASI HAGAMOS SCROLL:

//Sticky navigation:
//el scroll event se activa cada vez que le hacemos scroll a la pagina
window.addEventListener('scroll', () => {
  console.log(window.scrollY);//muestra la posicion del scroll de la pagina, muy facil

// de question es? cuando queremos que se vuelva sticky el navigation


} )

























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SCROLLING OF BOTTOM
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


let perro = {
  sound: 'guagua',
  talk: function () {

    return this.sound;
  }


}

// perro.talk();

let gua = perro.talk;
let bound = gua.bind(perro);
console.log(bound());
