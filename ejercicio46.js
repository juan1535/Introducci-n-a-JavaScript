function numerosMayores(num1, num2, num3) {
    const mayor = Math.max(num1, num2, num3);
    return `El mayor de los números es: ${mayor}`;
}

const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
const num3 = parseInt(prompt("Ingrese el tercer número:"));
alert(numerosMayores(num1, num2, num3));
