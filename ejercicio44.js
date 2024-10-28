function convertirMoneda() {

    const tasaDolar = 0.00027;
    const tasaEuro = 0.00023;

    const pesos = parseFloat(prompt("Ingrese la cantidad en pesos a convertir:"));

    if (isNaN(pesos) || pesos < 0) {
        alert("Por favor, ingrese una cantidad válida de pesos.");
        return;
    }

    const dolares = pesos * tasaDolar;
    const euros = pesos * tasaEuro;


    alert(`Convertir ${pesos} pesos:\n- A dólares: $${dolares.toFixed(2)}\n- A euros: €${euros.toFixed(2)}`);
}

convertirMoneda();
