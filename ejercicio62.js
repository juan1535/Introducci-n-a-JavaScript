function Palabra() {
    const palabra = prompt("Por favor, ingresa una palabra:");

    if (!palabra) {
        alert("ERROR: Debes ingresar una palabra.");
        return;
    }

    for (let i = 0; i < 10; i++) {
        alert(`Repetición ${i + 1}: ${palabra}`);
    }
}

Palabra();
