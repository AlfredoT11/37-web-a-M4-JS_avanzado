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
