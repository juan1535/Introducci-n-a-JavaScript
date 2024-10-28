let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 0) {
    alert("Valor inválido");
} else if (edad < 4) {
    alert("Entra gratis");
} else if (edad >= 4 && edad <= 18) {
    alert("5€ de entrada");
} else {
    alert("10€ de entrada");
}