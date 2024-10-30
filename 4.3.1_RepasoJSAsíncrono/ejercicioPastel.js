// Solución de Miguel Ángel González

// Funciones que simulan cada paso del proceso
function comprarIngredientes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Ingredientes comprados");
            resolve();
        }, 5000); // 5 segundos
    });
}

function prepararIngredientes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Ingredientes preparados");
            resolve();
        }, 2000); // 2 segundos
    });
}

function revolverIngredientes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Ingredientes revueltos");
            resolve();
        }, 3000); // 3 segundos
    });
}

function precalentarHorno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Horno precalentado");
            resolve();
        }, 4000); // 4 segundos
    });
}

function hornearMezcla() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5. Mezcla horneada");
            resolve();
        }, 5000); // 5 segundos
    });
}

function servirPastel() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("6. Pastel servido");
            resolve();
        }, 1000); // 1 segundo
    });
}


async function cocinarPastel() {
    await comprarIngredientes();
    await prepararIngredientes();

    // Respuesta secuencial
    //await revolverIngredientes();
    //await precalentarHorno();

    // Respuesta optimizada
    await Promise.all([revolverIngredientes(), precalentarHorno()]);
    
    await hornearMezcla();
    await servirPastel();
    console.log("Pastel listo para servir! 🍰");
}

cocinarPastel();

// Solución de Elizabeth Godínez
/*
let paso1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`1-comprar ingredientes`)
        resolve();

    }, 5000)
});

let paso4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`4. Precalentar el horno`)
    }, 4000)
    resolve();
});

paso4.then(() => {

}).catch(() => {
})

paso1.then(() => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log(`2-Preparar los ingredientes`)
            resolve();
        }, 2000)
    });

}).then(() => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("3- Revolver los ingredientes")
            resolve();
        }, 3000)
    });
}).catch(() => {
    console.log("valorpromesa NO cumplida")
})
*/