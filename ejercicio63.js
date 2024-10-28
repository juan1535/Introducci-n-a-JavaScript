function AniosCumplidos() {
    const edad = parseInt(prompt("Por favor, ingresa tu edad:"));

    if (isNaN(edad) || edad < 1) {
        alert("ERROR: Debes ingresar una edad válida mayor o igual a 1.");
        return;
    }

    alert(`Has cumplido los siguientes años:`);
    
    for (let i = 1; i <= edad; i++) {
        console.log(`Tienes: ${i}`);
    }
}

AniosCumplidos();