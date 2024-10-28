let radio = parseFloat(prompt("Ingrese el radio de la esfera"));

function calculo(r) {
    let volumen = (4 / 3) * Math.PI * r ** 3;
    alert(`El volumen de la esfera es: ${volumen}`)
}

calculo(radio)