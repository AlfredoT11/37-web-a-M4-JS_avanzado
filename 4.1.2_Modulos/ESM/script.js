// Sin destructuración
import * as constantes from './constantes/constantes.js';
import * as operacionesMatematicas from './operacionesMatematicas.js'

// Con destructuración
import { sumar, restar } from './operacionesMatematicas.js'
import { gravedades, PI } from './constantes/constantes.js';

console.log(operacionesMatematicas);
console.log(constantes);

// Accediendo sin destructuración.
console.log(operacionesMatematicas.operacionesMatematicas.sumar(10, 5));
console.log(constantes.gravedades.tierra);

// Accediendo con destructuración
console.log(sumar(10, 10));
console.log(gravedades.tierra);
