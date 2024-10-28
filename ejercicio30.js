function seguridadContrasena() {
    const contrasena = prompt("Ingresa una contraseña:");

    if (contrasena.length < 8 || contrasena.length > 12) {
        return "La contraseña debe tener entre 8 y 12 caracteres.";
    }
    
    const requisitosCorrectos = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;

    if (!requisitosCorrectos.test(contrasena)) {
        return "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un dígito.";
    }
    
    return "La contraseña es válida.";
}

alert(seguridadContrasena());