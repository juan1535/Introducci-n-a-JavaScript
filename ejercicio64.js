function listarNumerosImpares() {
    const numeroIngresado = parseInt(prompt("Por favor, ingresa un número entero positivo:"));

    if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
        alert("ERROR: Debes ingresar un número entero positivo válido.");
        return;
    }

    let numerosImpares = [];

    for (let i = 1; i <= numeroIngresado; i++) {
        if (i % 2 !== 0) {
            numerosImpares.push(i);
        }
    }

    alert(`Números impares desde 1 hasta ${numeroIngresado}: ${numerosImpares.join(", ")}`);
}

listarNumerosImpares();