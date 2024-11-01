let URL_BASE = "https://crudcrud.com/api/5f224eb91d1b40cdb9142bdb234b8249";

async function registrarPersona(e){

    e.preventDefault();

    let nombre = document.getElementById("nombreNuevaPersona").value;
    let apellido = document.getElementById("apellidoNuevaPersona").value;
    let telefono = document.getElementById("telefonoNuevaPersona").value;
    let email = document.getElementById("emailNuevaPersona").value;

    console.log(`${nombre}, ${apellido}, ${telefono}, ${email}`);

    try{
        let respuesta = await fetch(`${URL_BASE}/unicorns`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email
            }),
            mode: 'no-cors'
        });
        let respuestaJSON = await respuesta.json();
        console.log(respuestaJSON);
        alert('Contacto registrado');
    }catch(error){
        alert('Ocurrió un error');
        console.log(error);
    }

}

document.getElementById("registrarPersonaButton").addEventListener("click", (e) => {registrarPersona(e)});
