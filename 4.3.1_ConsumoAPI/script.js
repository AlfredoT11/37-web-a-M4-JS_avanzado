function consultarPersonajesStarWars(){
    console.log(`Personajes Star Wars`);

    let peticion = fetch("https://swapi.dev/api/people/"); // Por defecto, si no especificamos el método, el fetch realiza un GET.
    peticion.then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
    }).then((bodyJson) => {
        console.log(bodyJson);
        let h2s = bodyJson.results.map((personaje) => `<h5>${personaje.name}</h5>`)
        document.getElementById("personajesContenido").innerHTML = h2s.toString();
    }).catch((error) => {
        console.log(error);
    });
}


document.getElementById("consultarInfoButton").addEventListener("click", () => {
    consultarPersonajesStarWars();
});
