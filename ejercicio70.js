function verificarContrasena() {
    const contrasenaCorrecta = "BerserkBestoSeinen";
    let intento;

    do {
        intento = prompt("Por favor, introduce la contraseña:");
        if (intento !== contrasenaCorrecta) {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    } while (intento !== contrasenaCorrecta);

    alert("¡Contraseña correcta! Acceso concedido.");
}

verificarContrasena();