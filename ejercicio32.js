function calcularTotalCompra() {
    const descuentos = [0.05, 0.05, 0, 0.02, 0.02];
    const precios = [];
    let total = 0;
    let mensaje = "Resumen de la compra:\n";

    for (let i = 0; i < 5; i++) {
        const precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
        precios.push(precio);
    }

    for (let i = 0; i < precios.length; i++) {
        const descuento = precios[i] * descuentos[i];
        const precioConDescuento = precios[i] - descuento;
        total += precioConDescuento;
        mensaje += `Producto ${i + 1}: $${precioConDescuento.toFixed(2)}\n`;
    }

    mensaje += `Total de la compra: $${total.toFixed(2)}`;
    
    alert(mensaje);
}

calcularTotalCompra();