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
.then((valorPromesaResuelta) => {
    console.log(`Todas las promesas fueron resuletas. :D`);
    console.log(valorPromesaResuelta);
})
.catch((valorPromesaRechazada) => {
    console.log(`------------------------------------------`)
    console.log(`Promise.all()`);
    console.log(`Una de las promesas fue rechazada. :(`);
    console.log(valorPromesaRechazada);
    console.log(`------------------------------------------`)

});

// Promise.allSettled() regresa una promesa resuelta cuando TODAS las promesas terminan (sin importar
// si se cumplen o se rechazan)
Promise.allSettled([temporizador1, temporizador2, temporizador3])
.then((valoresPromesasTerminadas) => {
    console.log(`------------------------------------------`);
    console.log(`Promise.allSettled()`);
    console.log(`Todas las promesas terminaron`);
    console.log(valoresPromesasTerminadas);
    console.log(`------------------------------------------`);
}).catch((valorPromesaFallida) => {
    console.log(valorPromesaFallida);
});