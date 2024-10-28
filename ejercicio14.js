let base = parseFloat(prompt("Ingrese la base"));
let altura = parseFloat(prompt("Ingrese la altura"));

function area(b, a) {
    let areaT = (b * a) / 2;
    alert(`El área del triangulo es: ${areaT}`)
}

area(base, altura   )