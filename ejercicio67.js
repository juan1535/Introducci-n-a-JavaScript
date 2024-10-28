function Triangulo() {

    const numAltura = parseInt(prompt("Introduce un número entero positivo para la altura del triángulo:"));

    if (numAltura > 0) {
        for (let fila = 1; fila <= numAltura; fila++) {
            console.log('*'.repeat(fila));
        }
    } else {
        console.log("ERROR: Ingresa un número entero positivo.");
    }
}

Triangulo();