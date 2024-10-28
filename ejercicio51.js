function calcularDescuento(consumo) {
    const descuento_porcentaje = 15;
    return consumo > 130000 ? (consumo * descuento_porcentaje) / 100 : 0;
}

function PagoTotal() {
    const consumo = parseFloat(prompt("Ingrese el monto del consumo:"));
    
    if (isNaN(consumo) || consumo < 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    const descuento = calcularDescuento(consumo);
    const total = consumo - descuento;

    alert(`Consumo: $${consumo.toFixed(2)}
Descuento aplicado: ${descuento > 0 ? "15%" : "0%"}
Monto de descuento: $${descuento.toFixed(2)}
Total a pagar: $${total.toFixed(2)}`);
}

PagoTotal();