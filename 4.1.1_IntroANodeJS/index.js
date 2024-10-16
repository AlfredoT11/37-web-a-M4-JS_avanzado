const { numberToWords } = require('convert-number-to-words');


function verificarMayoriaDeEdad(edad){
    return edad >= 18;
}

// backtick -> alt + 96 -> ` 
// Nos permite trabajar con template strings.

let nombre = 'Jorge';
let edad = 24;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años."); // Creando un mensaje con concatenación.
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); // Creando un mensaje con template strings.

if(verificarMayoriaDeEdad(edad)){
    console.log(`Sí puedes tomarte esa cerveza`);
}else{
    console.log(`Aún no deberías ingerir alcohol. >:(`);
}

console.log(numberToWords(123));
console.log(numberToWords(123456789));
console.log(numberToWords(1000));
console.log(numberToWords(1001));
console.log(numberToWords(1002));


