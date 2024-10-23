function suma(a = 1, b = 1) {
    return a + b;
}

function resta(a = 1, b = 1) {
    return a - b;
}

function multiplicacion(a = 1, b = 1) {
    return a * b;
}

// Como no se están enviando parámetros, se toman los parámetros por defecto.
console.log(resta());

// En este caso como se está enviando un undefined, se toma como si el primer parámetro
// no se enviara y por lo tanto se toma el parámetro por defecto.
// Por otro lado, el segundo parámetro sí se está enviando, por lo que sobreescribirá
// el valor por defecto. 
console.log(suma(undefined, 0));

function sumar2Operaciones(operacion1, operacion2, parametrosOperacion1 = { a: 1, b: 1 }, parametrosOperacion2 = { a: 1, b: 1 }) {
    return operacion1(parametrosOperacion1.a, parametrosOperacion1.b) + operacion2(parametrosOperacion2.a, parametrosOperacion2.b);
}

const parametros1 = {
    a: 5,
    b: 8
}

const parametros2 = {
    a: 10,
    b: 2
}

console.log(`Suma con resta: ${sumar2Operaciones(suma, resta, parametros1, parametros2)}`);
console.log(`Multiplicación con resta: ${sumar2Operaciones(multiplicacion, resta)}`);
console.log(`Resta con resta: ${sumar2Operaciones(resta, resta)}`);

function saludarDeDia(nombre) {
    console.log(`¡Buenos días ${nombre}!`);
}

// Función flecha o función anónima
const saludarDeNoche = (nombre) => {
    console.log(`¡Buenos noches ${nombre}!`);
}

function saludar(saludarCallback) {
    let nombre = 'Pedro';
    saludarCallback(nombre);
}

let hora = 14;
if (hora < 12) {
    saludar(saludarDeDia);
} else if (hora < 18) {
    saludar((nombre) => {
        console.log(`¡Buenos tardes ${nombre}!`);
    });
} else {
    saludar(saludarDeNoche)
}

