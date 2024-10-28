const regex = /^-?\d+(\.\d+)(e-?\d+)?$/;

let num = prompt("Ingrese un número");

if (regex.test(numero) === true) {
    alert("El número contiene un punto flotante");
} else {
    alert("El número no contiene un punto flotante");
}