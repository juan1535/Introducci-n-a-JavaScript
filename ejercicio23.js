let vkmh = parseFloat(prompt("Ingrese la velocidad KMH"));

function calculo(vkmh) {
    let velocidad = vkmh / 3.6;
    alert(`La velocidad es: ${velocidad} m/s`);
}

calculo(vkmh)