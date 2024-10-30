/*
let cicloTerminado = false;

setTimeout(() => {
    console.log(`Ciclo terminado`);
    cicloTerminado = true;
}, 3000);

async function ejecucionDelCicloInfinito(){
    while(!cicloTerminado){
        console.log('Ciclo ejecutándose...');

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null)
            }, 0)
        });
    }
}

ejecucionDelCicloInfinito();
*/

// Solución de Yunny Bravo
var ejecucionTerminada = false;
console.log(`Empezando temporizador...`);

function agotarTiempo() {
    console.log(`¡Se agotó el tiempo!`);
    ejecucionTerminada = true;
}

setTimeout(agotarTiempo, 1000);

const intervalo = setInterval(() => {
    if (ejecucionTerminada) {
        console.log('Temporizador terminado.');
        clearInterval(intervalo);
    } else {
        console.log('Esperando temporizador...');
    }
}, 100);
