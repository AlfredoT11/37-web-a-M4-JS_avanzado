let URL_BASE = "https://crudcrud.com/api/5f224eb91d1b40cdb9142bdb234b8249";

async function registrarPersona(e){

    e.preventDefault();

    let nombre = document.getElementById("nombreNuevaPersona").value;
    let apellido = document.getElementById("apellidoNuevaPersona").value;
    let telefono = document.getElementById("telefonoNuevaPersona").value;
    let email = document.getElementById("emailNuevaPersona").value;

    console.log(`${nombre}, ${apellido}, ${telefono}, ${email}`);

    try{
        let respuesta = await fetch(`${URL_BASE}/contacto`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email
            })
        });
        let respuestaJSON = await respuesta.json();
        console.log(respuestaJSON);
        alert('Contacto registrado');
    }catch(error){
        alert('Ocurrió un error');
        console.log(error);
    }
}

async function obtenerInformacionDeUnContacto(e){
    e.preventDefault();

    let idContacto = document.getElementById("idContactoBuscar").value;

    try{
        let respuesta = await fetch(`${URL_BASE}/contacto/${idContacto}`, {mode: 'no-cors'});
        let respuestaJSON = await respuesta.json();
        console.log(respuestaJSON);
    }catch(error){
        alert('Ocurrió un error');
        console.log(error);
    }
}

document.getElementById("registrarPersonaButton").addEventListener("click", (e) => {registrarPersona(e)});
document.getElementById("buscarPersonaButton").addEventListener("click", (e) => {obtenerInformacionDeUnContacto(e)});
