function fraseEnReversa() {
    const frase = prompt("Ingrese una frase que lo identifique como programador de Software:");
    
    if (!frase) {
        alert("Por favor, ingrese una frase válida.");
        return;
    }
    
    let fraseAlReves = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseAlReves += frase[i];
    }
    
    alert(`Frase invertida: ${fraseAlReves}`);
}

fraseEnReversa();