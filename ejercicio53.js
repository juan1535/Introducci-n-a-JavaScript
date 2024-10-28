function obtenerPrecioProducto(indice) {
    const precio = parseFloat(prompt(`Ingrese el precio del producto ${indice}:`));
    return !isNaN(precio) && precio > 0 ? precio : null;
}

function calcularTotales(productos, iva) {
    const subtotal = productos.reduce((total, precio) => total + precio, 0);
    const ivaTotal = subtotal * iva;
    const total = subtotal + ivaTotal;
    return { subtotal, ivaTotal, total };
}

function mostrarResumenCompleto(productos, totales) {
    let mensaje = "CÁLCULO DE COMPRA DE PRODUCTOS CON IVA\n\n";

    productos.forEach((precio, index) => {
        mensaje += `Producto ${index + 1}: $${precio.toFixed(2)}\n`;
    });
    
    mensaje += `\nSubtotal: $${totales.subtotal.toFixed(2)}\n`;
    mensaje += `IVA (19%): $${totales.ivaTotal.toFixed(2)}\n`;
    mensaje += `Total de la compra: $${totales.total.toFixed(2)}`;

    alert(mensaje);
}

function CalculoCompra() {
    const IVA = 0.19;
    const productos = [];

    for (let i = 1; i <= 5; i++) {
        const precio = obtenerPrecioProducto(i);
        if (precio === null) {
            alert(`ERROR: Ingrese un precio válido para el producto ${i}.`);
            return;
        }
        productos.push(precio);
    }

    const totales = calcularTotales(productos, IVA);
    mostrarResumenCompleto(productos, totales);
}

CalculoCompra();