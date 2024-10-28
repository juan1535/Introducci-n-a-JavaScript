    function Banco() {
    
    const saldoInicial = parseFloat(prompt("Ingrese el saldo del depósito:"));

    if (isNaN(saldoInicial) || saldoInicial < 0) {
        alert("ERROR: Por favor, ingrese un saldo válido.");
        return;
    }

    let tasaInteres;
    if (saldoInicial < 100000) {
        tasaInteres = 0.03;
    } else {
        tasaInteres = 0.04;
    }

    const interesPagado = saldoInicial * tasaInteres;
    const saldoFinal = saldoInicial + interesPagado;

    alert(`Resultados:
    > Saldo inicial: $${saldoInicial.toFixed(2)}
    > Tasa de interés: ${(tasaInteres * 100).toFixed(2)}%
    > Interés pagado: $${interesPagado.toFixed(2)}
    ~ Saldo final: $${saldoFinal.toFixed(2)}`);
}

Banco();