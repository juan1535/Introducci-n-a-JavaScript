let a = parseFloat(prompt('Ingrese número 1'));
let b = parseFloat(prompt('Ingrese número 2'));

const mayor = (a, b) => a < b ? console.log(`El número ${b} es el mayor`) : console.log(`El número ${a} es el mayor`); // Esto es una función expresada

mayor(a, b); //a y b son argumentos