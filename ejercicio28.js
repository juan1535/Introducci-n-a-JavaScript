let nombre = parseFloat(prompt("Ingrese su nombre:"));
let horasTrabajo = parseFloat(prompt("Ingrese cuantas horas a trabajado:"));
let pagoHoras = parseFloat(prompt("Ingrese cuánto gana por hora:"));

function calculo() {
    let horas = pagoHoras * horasTrabajo;
    return horas;
}

let sueldo = calculo(horasTrabajo,pagoHoras);

alert(`Su sueldo es de: ${sueldo}`);