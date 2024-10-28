function cuentaRegresiva() {

    const numeroInicial = parseInt(prompt("Por favor, ingresa un número entero positivo:"));

    if (isNaN(numeroInicial) || numeroInicial <= 0) {
        alert("ERROR: Debes ingresar un número entero positivo.");
        return;
    }

    let listaRegresiva = [];

    for (let contador = numeroInicial; contador >= 0; contador--) {
        listaRegresiva.push(contador);
    }

    alert(`Cuenta atrás desde ${numeroInicial}: ${listaRegresiva.join(", ")}`);
}

cuentaRegresiva();
