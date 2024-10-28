function Inversion() {

    const montoInicial = parseFloat(prompt("Ingresa la cantidad que deseas invertir:"));
    const tasaInteresAnual = parseFloat(prompt("Ingresa el interés anual (en %):")) / 100;
    const duracionAnual = parseInt(prompt("Ingresa la duración de la inversión en años:"));

    if (montoInicial > 0 && tasaInteresAnual >= 0 && duracionAnual > 0) {
        let montoActual = montoInicial;

        console.log("Año\tCapital Acumulado");

        for (let anio = 1; anio <= duracionAnual; anio++) {
            montoActual += montoActual * tasaInteresAnual;
            console.log(`${anio}\t${montoActual.toFixed(2)}`);
        }
    } else {
        alert("ERROR: Introduce valores válidos para la inversión.");
    }
}

Inversion();