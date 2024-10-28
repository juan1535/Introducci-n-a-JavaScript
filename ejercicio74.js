function iniciarEco() {
    let respuestaUsuario;

    do {
        respuestaUsuario = prompt("Escribe algo (escribe 'salir' para finalizar):");

        if (respuestaUsuario.toLowerCase() !== 'salir') {
            console.log(respuestaUsuario);
        }

    } while (respuestaUsuario.toLowerCase() !== 'salir');
}

iniciarEco();