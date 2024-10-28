function seleccionarPostulante() {

    const edad = parseInt(prompt("Ingrese la edad del postulante:"));
    const estatura = parseFloat(prompt("Ingrese la estatura del postulante en cm:"));
    const peso = parseFloat(prompt("Ingrese el peso del postulante en kg:"));

    if (isNaN(edad) || isNaN(estatura) || isNaN(peso) || edad < 0 || estatura < 0 || peso < 0) {
        alert("ERROR: Por favor, ingrese valores válidos.");
        return;
    }

    const esElegible = edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80;

    if (esElegible) {
        alert("El postulante es elegible para la selección de baloncesto.");
    } else {
        alert("El postulante NO cumple con los requisitos para la selección de baloncesto.");
    }
}

seleccionarPostulante();