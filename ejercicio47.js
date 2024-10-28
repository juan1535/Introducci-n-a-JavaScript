function Comparar(a, b, c) {
    if (a === b && b === c) {
        return "Los tres números son iguales.";
    }
    
    const mayor = Math.max(a, b, c);
    const menor = Math.min(a, b, c);
    return `El mayor es: ${mayor} y el menor es: ${menor}`;
}

const a = parseInt(prompt("Ingrese el primer valor:"));
const b = parseInt(prompt("Ingrese el segundo valor:"));
const c = parseInt(prompt("Ingrese el tercer valor:"));
alert(Comparar(a, b, c));
