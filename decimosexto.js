function deNumeroATexto() {
    const numerosTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    
    let numero = prompt("Ingresa un número del 0 al 5");
    
    numero = Number(numero);

    if (numero >= 0 && numero <= 5) {
        return numerosTexto[numero];
    } else {
        return "Número fuera de rango";
    }
}

alert(deNumeroATexto());