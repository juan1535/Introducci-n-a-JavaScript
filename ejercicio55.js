alert(`
    ------------------------------------------------------------------------------
                                    DESCUENTO EN TIENDA DE HELADOS
                                            (Según el tipo de membresía)
    -------------------------------------------------------------------------------`);

function DescuentoHelados() {

    const costoHelado = parseFloat(prompt("Ingrese el costo del helado:"));
    const membresiaCliente = prompt("Ingrese su tipo de membresía (A, B o C):").toUpperCase();

    if (isNaN(costoHelado) || costoHelado <= 0) {
        alert("ERROR: Por favor, ingrese un costo válido.");
        return;
    }

    let porcentajeDescuento;
    switch (membresiaCliente) {
        case 'A':
            porcentajeDescuento = 10;
            break;
        case 'B':
            porcentajeDescuento = 15;
            break;
        case 'C':
            porcentajeDescuento = 20;
            break;
        default:
            alert("ERROR: Tipo de membresía no válido. Debe ser A, B o C.");
            return;
    }

    const montoDescuento = (costoHelado * porcentajeDescuento) / 100;
    const totalAPagar = costoHelado - montoDescuento;

    alert(`
    Resultados:
    > Costo original: $${costoHelado.toFixed(2)}
    > Tipo de membresía: ${membresiaCliente}
    > Descuento aplicado: ${porcentajeDescuento}%
    > Monto de descuento: $${montoDescuento.toFixed(2)}
    
    ~ Precio final: $${totalAPagar.toFixed(2)}`);
}

DescuentoHelados();