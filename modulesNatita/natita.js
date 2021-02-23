//importing module
/*import {totally as totalmente, meVoy as meFui} from './exportar.js';
import { dog } from './exportar.js';
import { arraycito } from './exportar.js';
import { sesi } from './exportar.js';
console.log('i love u papi');
console.log(dog);



function clari(num) {
    
    for (let i = 0; i < num; i++){
        arraycito.push(i)
    }
    return arraycito;
};

let resultado = clari(10);
console.log(resultado);

 function sumaSesi() {
     let copyCat = sesi;

     while (copyCat > 0) {
         copyCat --
     };
     return `${copyCat} ahora soy zero`;
};

console.log(totalmente);
console.log(meFui + ' y luego a Zapatoca');

console.log(sumaSesi()); */

// IMPORT TODITO DE UNA VEZ, ENTREGA  COMO UN OBJETO

//import * as Todillo from './exportar.js';

//import * as Segunda from './segundo.js';
//console.log(Segunda);

//console.log(Segunda.funcion(Segunda.tener + Segunda.pelo));

//console.log(Todillo.dog);

//DEFAULT EXPORTS:
//NO NAMES ARE INVOLVED

//import valor from './segundo.js';

//you can mix named exports and default:

import numerillo, {pelo as pelillo, tener} from './segundo.js'


console.log(numerillo + pelillo);

//IN PRACTICE YOU SHOULD NOT MIXED NAMED AND DEFAULT MODULES