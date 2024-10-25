/*
let temporizador1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(`Valor generado en temporizador 1: ${numeroAleatorio}`);
        if(numeroAleatorio > 0){
            resolve('El valor es mayor a 5. :)');
        }else{
            reject('El valor es menor que 5. :(');
        }
    }, 2000);
});



temporizador1.then((valorPromesaCumplida) => {
    console.log('Promesa cumplida');
    console.log(valorPromesaCumplida);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numeroAleatorio = Math.floor(Math.random() * 10);
            console.log(`Valor generado en temporizador 2: ${numeroAleatorio}`);
            if(numeroAleatorio > 0){
                resolve('El valor es mayor a 5. :)');
            }else{
                reject('El valor es menor que 5. :(');
            }
        }, 5000);
    });
}).then((valorPromesaCumplida) => {
    console.log('Promesa cumplida');
    console.log(valorPromesaCumplida);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numeroAleatorio = Math.floor(Math.random() * 10);
            console.log(`Valor generado en temporizador 3: ${numeroAleatorio}`);
            if(numeroAleatorio > 5){
                resolve('El valor es mayor a 5. :)');
            }else{
                reject('El valor es menor que 5. :(');
            }
        }, 1000);
    });
}).catch((valorPromesaRechazada) => {
    console.log('Promesa rechazada');
    console.log(valorPromesaRechazada);
});

*/

let temporizador1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(`Valor generado en temporizador 1: ${numeroAleatorio}`);
        if(numeroAleatorio > 3){
            resolve('El valor es mayor a 3. :)');
        }else{
            reject('El valor es menor que 3. :(');
        }
    }, 2000);
});

let temporizador2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(`Valor generado en temporizador 2: ${numeroAleatorio}`);
        if(numeroAleatorio > 3){
            resolve('El valor es mayor a 3. :)');
        }else{
            reject('El valor es menor que 3. :(');
        }
    }, 5000);
});

let temporizador3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(`Valor generado en temporizador 3: ${numeroAleatorio}`);
        if(numeroAleatorio > 3){
            resolve('El valor es mayor a 3. :)');
        }else{
            reject('El valor es menor que 3. :(');
        }
    }, 1000);
});

// Promise.all() regresa una promesa resuelta si TODAS las promesas se cumplen.
// Si CUALQUIERA de las promesas es rechazada, la promesa resultante también es rechazada.
Promise.all([temporizador1, temporizador2, temporizador3])
.then((valorPromesaResuelta) => { // valorPromesasResuelta es un arreglo con los valores del resolve()
    console.log(`Todas las promesas fueron resuletas. :D`);
    console.log(valorPromesaResuelta); 
})
.catch((valorPromesaRechazada) => { // valorPromesaRechazada es el valor del reject() de la primera promesa rechazada.
    console.log(`------------------------------------------`)
    console.log(`Promise.all()`);
    console.log(`Una de las promesas fue rechazada. :(`);
    console.log(valorPromesaRechazada);
    console.log(`------------------------------------------`)

});

// Promise.allSettled() regresa una promesa resuelta cuando TODAS las promesas terminan (sin importar
// si se cumplen o se rechazan)
Promise.allSettled([temporizador1, temporizador2, temporizador3])
.then((valoresPromesasTerminadas) => { // valoresPromesasTerminadas nos regresa un arreglo de los valores de resolve() y reject()
    console.log(`------------------------------------------`);
    console.log(`Promise.allSettled()`);
    console.log(`Todas las promesas terminaron`);
    console.log(valoresPromesasTerminadas);
    console.log(`------------------------------------------`);
}).catch((valorPromesaFallida) => {
    console.log(valorPromesaFallida);
});

// Promise.any() regresa una promesa resuelta con la PRIMERA promesa que se cumpla.
// Si TODAS las promesas se rechaza, la promesa resultante se rechaza.
Promise.any([temporizador1, temporizador2, temporizador3])
.then((valorPrimeraPromesaCumplida) => { // valorPrimeraPromesaCumplida es el valor del resolve() de la primera promesa que se cumplió
    console.log(`------------------------------------------`);
    console.log(`Promise.any()`);
    console.log(`Se cumplió una promesa.`);
    console.log(valorPrimeraPromesaCumplida);
    console.log(`------------------------------------------`);
}).catch((valorPromesaFallida) => { // valorPromesaFallida contiene los valores de los reject() de todas las promesas.
    console.log(`Se rechazaron todas las promesas.`)
    console.log(valorPromesaFallida);
});

// Promise.race() ejecuta el then() si la primera promesa en terminar se resuelve.
// Ejecuta el catch() si la primera promesa en terminar es rechazada.
Promise.race([temporizador1, temporizador2, temporizador3])
.then((valorPromesaCumplida) => { 
    console.log(`------------------------------------------`);
    console.log(`Promise.race()`);
    console.log(`Se cumplió la primera promesa`);
    console.log(valorPromesaCumplida);
    console.log(`------------------------------------------`);
}).catch((valorPromesaRechazada) => {
    console.log('Falló la primera promesa');
    console.log(valorPromesaRechazada);
});

// Ejercicio
/* Vamos a cocinar un pastel y para eso debemos seguir los siguientes pasos:
    1. Comprar los ingredientes -> 5 segundos
    2. Preparar los ingredientes -> 2 segundos
    3. Revolver los ingredientes -> 3 segundos
    4. Precalentar el horno -> 4 segundos
    5. Hornear mezcla -> 5 segundos
    6. Servir pastel -> 1 segundos
    Tiempo total = 20 segundos.

    1. Simular cada paso con setTimeout y console logs y van preparar su pastel.

    2. Optimizar el proceso. Utilizar procesos asíncronos para ahorrar tiempo en la preparación del pastel.
*/
