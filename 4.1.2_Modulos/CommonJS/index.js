const operacionesMatematicas = require('./operacionesMatematicas.js');
const constantes = require('./constantes/constantes.js');

// Utilizando la destructuración
const { sumar, restar } = require('./operacionesMatematicas.js');
const { gravedades } = require('./constantes/constantes.js');


console.log(operacionesMatematicas);
console.log(constantes);

// Accediendo sin destructuración.
console.log(operacionesMatematicas.sumar(10, 5));
console.log(constantes.gravedades.tierra);

// Accediendo con destructuración
console.log(sumar(10, 10));
console.log(gravedades.tierra);

// Ejercicio: 
/*
Busca al menos dos de los programas de JavaScript que hayas realizado anteriormente, adaptalos y ejecutalos usando Node js.
Se deben cumplir las siguientes condiciones:
    - Los programas deben requerir de entradas de usuario (leer datos desde la terminal con Node)
    - Utilizar al menos un import y export.
*/