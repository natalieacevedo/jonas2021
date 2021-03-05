//exporting module

let objeto = {
    'arroz': 'con papa',
    'nena': 'clarita',
    'papa': 'te amo'
};

export let dios = 'y orden';// asi se exporta de una vez;

let vacio = [];

let sumadora = function (num) {
    vacio.push(num + 2);
    console.log(vacio);
};

const frases = 'mis frases celebres';

export { sumadora as sumita, objeto };
    
//DEFAULT EXPORTS SE USAN CUANDO UNO SOLO QUIERE EXPORTAR UNA COSA POR MODULO!
//cuando se importan se les da el nombre que uno quiera

export default 25 // no se le pone nombre ni nada, puede ser una funcion o cualquier cosa;

