function validarPin(pin) {
    if (typeof pin === 'string' && (pin.length === 4 || pin.length === 6)) {
        return /^\d+$/.test(pin);
    }
    return false;
}

let pin = prompt("Ingrese el pin");
let esValido = validarPin(pin);

if (esValido) {
    alert("El PIN es válido.");
} else {
    alert("El PIN no es válido.");
}
