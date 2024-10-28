let nota1 = parseFloat(prompt(`Ingrese el valor de sus notas. 
Nota 1:`));

let nota2 = parseFloat(prompt(`Ingrese el valor de sus notas. 
Nota 2:`));

let nota3 = parseFloat(prompt(`Ingrese el valor de sus notas. 
Nota 3:`));

let EF =  parseFloat(prompt(`Ingrese calificación del examen final:`));
let TF =  parseFloat(prompt(`Ingrese calificación del trabajo final:`));

function calculo(nota1, nota2, nota3) {
    let promedioNotas = (nota1 + nota2 + nota3) / 3;
    return promedioNotas
}

let promedio = calculo(nota1, nota2, nota3);

let promedioFinal = (promedio * 0.55) + (EF * 0.30) + (TF * 0.15);

alert(`Promedio de notas: ${promedio.toFixed(2)}\nPromedio final de la materia de algoritmos es: ${promedioFinal.toFixed(2)}`);