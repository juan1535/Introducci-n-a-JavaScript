function asignarCalificacion() {

    const calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));

    if (isNaN(calificacionNumerica) || calificacionNumerica < 0 || calificacionNumerica > 10) {
        alert("ERROR: Por favor, ingrese una calificación válida entre 0 y 10.");
        return;
    }

    let calificacionLiteral;
    if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
        calificacionLiteral = "A - Excelente";
    } else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9.1) {
        calificacionLiteral = "A - Muy bien";
    } else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8.1) {
        calificacionLiteral = "A - Bien";
    } else {
        calificacionLiteral = "NA - No Aprobado";
    }

    alert(`Resultados:
    > Calificación numérica: ${calificacionNumerica}
    > Calificación literal: ${calificacionLiteral}`);
}

asignarCalificacion();