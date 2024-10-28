let a = parseFloat(prompt("Valor a"));
let b = parseFloat(prompt("Valor b"));
let c = parseFloat(prompt("Valor c"));

function calculo(a, b, c) {  // una variable en este caso; "resultado" no puede estar definida dentro de una función, en este caso; "calculo" porque no está disponible fuera de ella. 
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    return resultado;
}

let resultado = calculo(a,b,c);
alert(`El volumen de la esfera es: ${resultado}`)