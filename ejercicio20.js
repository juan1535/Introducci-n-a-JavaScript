let a = parseFloat(prompt("Ingrese a"));
let b = parseFloat(prompt("Ingrese b"));
let c = parseFloat(prompt("Ingrese c"));

function calculo(a, b, c) {
    let discriminante = b ** 2 - 4 * a * c;

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b + Math.sqrt(discriminante)) / (2 * a);

        alert(`Solución 1: ${x1}
               Solución 2: ${x2}`)
    }   else if (discriminante === 0) {
        let x = -b / (2 * a);
        alert(`Solución ${x}`)
    } else {
        alert(`No tienen solución, el discriminante es negativo ${discriminante}`);
    }
}


calculo(a, b, c)