let temporizador1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(`Valor generado: ${numeroAleatorio}`);
        if(numeroAleatorio > 5){
            resolve('El valor es mayor a 5. :)');
        }else{
            reject('El valor es menor que 5. :(');
        }
    }, 2000);
});


temporizador1.then((valorPromesaCumplida) => {
    console.log('Promesa cumplida');
    console.log(valorPromesaCumplida);
}).catch((valorPromesaRechazada) => {
    console.log('Promesa rechazada');
    console.log(valorPromesaRechazada);
});

