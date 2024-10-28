function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}


const x1 = 3, y1 = 4;
const x2 = 7, y2 = 1;
alert(`La distancia entre los puntos es: ${calcularDistancia(x1, y1, x2, y2)}`);