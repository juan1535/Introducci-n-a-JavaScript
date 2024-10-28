function letrasEnFrase() {
    const frase = prompt("Introduce una frase:");
    const letra = prompt("Introduce la letra que deseas contar:");

    if (!frase || !letra || letra.length !== 1) {
        alert("Por favor, introduce una frase y una sola letra válida.");
        return;
    }

    let contador = 0;

    for (let char of frase) {
        if (char === letra) {
            contador++;
        }
    }

    alert(`La letra "${letra}" aparece ${contador} veces en la frase.`);
}

letrasEnFrase();