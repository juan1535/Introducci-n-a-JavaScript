function numeros(numero) {
    if (numero > 0 && numero < 100) {
        return "El número es positivo y menor que 100.";
    } else {
        return "El número no cumple con los requisitos.";
    }
}

const numero = parseInt(prompt("Ingrese un número:"));
alert(numeros(numero));