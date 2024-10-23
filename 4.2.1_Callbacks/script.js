function suma(a=1, b=1){
    return a + b;
}

function resta(a=1, b=1){
    return a - b;
}

function multiplicacion(a=1, b=1){
    return a * b;
}

// Como no se están enviando parámetros, se toman los parámetros por defecto.
console.log(resta());

// En este caso como se está enviando un undefined, se toma como si el primer parámetro
// no se enviara y por lo tanto se toma el parámetro por defecto.
// Por otro lado, el segundo parámetro sí se está enviando, por lo que sobreescribirá
// el valor por defecto. 
console.log(suma(undefined, 0));

function sumar2Operaciones(operacion1, operacion2){
    return operacion1() + operacion2();
}

console.log(`Suma con resta: ${sumar2Operaciones(suma, resta)}`);
console.log(`Multiplicación con resta: ${sumar2Operaciones(multiplicacion, resta)}`);
console.log(`Resta con resta: ${sumar2Operaciones(resta, resta)}`);

