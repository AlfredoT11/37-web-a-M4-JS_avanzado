console.log(`Soy un fragmento de código que no depende de una promesa.`);

// async-await

async function descargarImagenesDeChina(){
    try{
        console.log(`Descargando imágenes del zoológico...`);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Imágenes descargadas.`);
                resolve();
            }, 2000);
        });

        console.log(`Descargando imágenes del museo...`);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Imágenes descargadas.`);
                resolve();
            }, 3000);
        });
        console.log(`Finalizando proceso.`);
    }catch(e){
        console.log(`Ocurrió un error`);
    }
}

descargarImagenesDeChina();
