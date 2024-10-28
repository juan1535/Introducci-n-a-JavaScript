function Rectangulo(lado1, lado2) {
    if (lado1 > 0 && lado2 > 0) {
        const area = lado1 * lado2;
        return `El área del rectángulo es: ${area}`;
    } else {
        return "Los lados deben ser positivos.";
    }
}

const lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo:"));
const lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo:"));
alert(Rectangulo(lado1, lado2));