function PresupuestoPintura() {
    const metrosCuadrados = parseFloat(prompt("Ingrese los metros cuadrados (m²) a pintar:"));
    const precioMetroCuadrado = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));
    
    if (isNaN(metrosCuadrados) || isNaN(precioMetroCuadrado) || metrosCuadrados <= 0 || precioMetroCuadrado <= 0) {
        alert("Por favor, ingrese valores válidos y mayores a cero.");
        return;
    }

    const costoTotal = metrosCuadrados * precioMetroCuadrado;
    alert(`El presupuesto para pintar ${metrosCuadrados} m² es: $${costoTotal.toFixed(2)}`);
}

PresupuestoPintura();