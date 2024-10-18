const gravedades = {
    tierra: 9.81,
    marte: 3.73,
    planetasGrandes: {
        jupiter: 24.79
    }
}

console.log(gravedades.tierra);
console.log(gravedades.marte);
console.log(gravedades.planetasGrandes.jupiter);

// Destructuración de objetos literales
// const tierra = gravedades.tierra;
// const marte = gravedades.marte;

const {tierra, marte} = gravedades;
console.log(`Valor de tierra: ${tierra}`);
console.log(`Valor de marte: ${marte}`);


// Destructuración de arreglos
const frutas = ['Naranja', 'Fresa', 'Mango'];
// const fruta1 = frutas[0];
// const fruta2 = frutas[1];
// const fruta3 = frutas[2];

const [fruta1, fruta2, fruta3] = frutas;

console.log(`Valor de fruta1: ${fruta1}`);
console.log(`Valor de fruta2: ${fruta2}`);
console.log(`Valor de fruta3: ${fruta3}`);

