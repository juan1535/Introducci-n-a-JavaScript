function Resta() {
    const valor1 = parseFloat(prompt("Ingrese el primer valor:"));
    const valor2 = parseFloat(prompt("Ingrese el segundo valor:"));

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("ERROR: Asegúrese de ingresar valores numéricos válidos.");
        return;
    }

    let resultado;

    if (valor1 > valor2) {
        resultado = valor1 - valor2;
        alert(`Resultados:
        Primer valor: ${valor1}
        Segundo valor: ${valor2}
        Resultado de la resta: ${resultado}`);
    } else {
        alert("ERROR: La resta no es posible porque el primer valor no es mayor que el segundo.");
    }
}

Resta();