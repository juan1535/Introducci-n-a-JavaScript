let radio = parseFloat (prompt("Ingrese el radio de la circunferencia"));

function calculo(r) {
    let longitud = 2 * Math.PI * r;
    let area = Math.PI * r ** 2;

    alert(`La longitud es: ${longitud} el área es: ${area}`)
}

calculo(radio);