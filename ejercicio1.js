function aprobarEdad(edad) {
    return !isNaN(edad) && edad > 0;
}

function comprobrarEdad() {
    let edad = prompt ("Ingresa tu edad");
    edad = new Number (edad);

    if (!aprobarEdad(edad)) {
        alert("Ingresa un número positivo válido");
    } else {
        if (edad >= 18) {
            alert('Eres mayor de edad');
        } else {
            alert("Eres menor de edad")
        }
    }
}
comprobrarEdad();