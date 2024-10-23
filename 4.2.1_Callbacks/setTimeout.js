var ejecucionTerminada = false;
console.log(`Empezando temporizador...`);

function agotarTiempo(){
    console.log(`¡Se agotó el tiempo!`);
    ejecucionTerminada = true;
}

setTimeout(agotarTiempo, 1000);

console.log(`Temporizador terminado.`);


/*
while(!ejecucionTerminada){
    console.log(ejecucionTerminada);
    console.log('Esperando temporizador...');
}
*/
