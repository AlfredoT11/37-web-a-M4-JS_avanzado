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

/*

Ejercicio de callbacks
1. Crear 3 funciones diferentes para simular un inicio de sesión, estas funciones reciben 
como parámetros un usuario y contraseña.
2. Crear una función que reciba un callback y reciba el usuario y contraseña.
3. La función que recibe el callback debe ejecutarlo y regresar verdadero si 
los valores recibidos permiten iniciar sesión o no.

*/

function iniciarSesionAlumno(usuario, password){
    const alumnos = ['Pedro11', 'María32'];
    const passwords = ['12345', 'contraseña'];

    let sesionValida;

    // Verificar que los parámetros recibidos existan;

    return sesionValida;
}

function iniciarSesion(callback, usuario, password){
    
}
