let minutos = parseFloat(prompt("¿Cuántos minutos habló?"));

function calculo(m) {
    const valorMinuto = 355;
    const IVA = 0.2;

    let costoTotal = m * valorMinuto + m * valorMinuto * IVA;

    alert(`El costo total de la llamada es: ${costoTotal}`)
}

calculo(minutos);