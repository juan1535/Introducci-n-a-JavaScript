function LetrasInvertidas() {
    const palabra = prompt("Introduce una palabra:");

    if (!palabra) {
        alert("Por favor, introduce una palabra válida.");
        return;
    }

    alert("Letras en orden inverso:");
    
    for (let i = palabra.length - 1; i >= 0; i--) {
        console.log(palabra[i]);
    }
}

LetrasInvertidas();
