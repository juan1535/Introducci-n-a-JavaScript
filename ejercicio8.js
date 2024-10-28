let puntuacion = parseFloat(prompt("Ingrese la puntuación del empleado"));

let cantidadDinero;

if (puntuacion === 0.0) {
    cantidadDinero = 0;
    alert(`Nivel inaceptable, su cantidad de dinero es: ${cantidadDinero}`)
} else if (puntuacion === 0.4) {
    cantidadDinero = 2400 * 0.4;
    alert(`Nivel Aceptable, su cantidad de dinero es: ${cantidadDinero}`)
} else if (puntuacion >= 0.6) {
    cantidadDinero = 2400 * puntuacion;
    alert(`Nivel Meritorio, su cantidad de dinero es: ${cantidadDinero}`)
}