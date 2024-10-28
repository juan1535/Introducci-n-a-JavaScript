let nombre = prompt("Ingrese su nombre");

let sexo = prompt(
    "Ingrese su sexo (F para femenino. M para masculino)"
).toUpperCase();

let grupo;

if ((sexo === "F" && nombre.toUpperCase() < "M") 
||
(sexo === "M" && nombre.toUpperCase() > "M")) {
    grupo = "Grupo A";
} else {
    grupo = "Grupo B";
}

alert(`Usted pertece al ${grupo}`);