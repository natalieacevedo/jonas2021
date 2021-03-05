//importing module


/*
import { sumita, dios as god, objeto } from './exportacion.js';

console.log(sumita(5));
console.log(god);
console.log(objeto);
*/
// import every from './node_modules/lodash-es/_arrayEvery.js';// esto es de una libreria, ademas no es necesario especificar todo el path si se usa parcel

import every from 'lodash-es';



import * as Todito from './exportacion.js' //esto importa todos los exports de una en un objeto
import veinteAlgo from './exportacion.js' // se le da el nombre que uno quiera; default exports van sin corchetes
console.log(Todito.dios);//se accede como en un objeto;
console.log(veinteAlgo);
Todito.sumita(4);

console.log(Todito.objeto.nena);

if (module.hot) {
    module.hot.accept();
};



console.log(every([6, 7, 8, 9], el => el > 10));