let edad = parseInt(prompt("Ingrese su edad"));
let ingrese = parseFloat(prompt("Ingrese sus ingresos"));

if (edad < 0 || ingreso < 0) {
    alert("Valores invalidos");
} else {
    if (edad > 16 && ingreso >= 1000) {
        alert("Debe tributar");
    } else {
        alert("No debe tributar");
    }
}