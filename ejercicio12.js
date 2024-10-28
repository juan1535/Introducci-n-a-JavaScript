let base = parseFloat(prompt("Ingrese la base del rectángulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));

function areaRectangulo(b, a) {
    return b * a;
}

let resultado = areaRectangulo(base, altura)

alert(`El área del rectángulo es ${resultado}`)