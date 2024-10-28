function calcularTotalVenta() {
    const precioLibro = 10000;
    const precioCuaderno = 7550;
    const precioLapicero = 5550;

    const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
    const cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
    const cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

    if (isNaN(cantidadLibros) || isNaN(cantidadCuadernos) || isNaN(cantidadLapiceros) || 
        cantidadLibros < 0 || cantidadCuadernos < 0 || cantidadLapiceros < 0) {
        alert("Por favor, ingrese cantidades válidas para todos los artículos.");
        return;
    }

    const totalVenta = (cantidadLibros * precioLibro) + 
                       (cantidadCuadernos * precioCuaderno) + 
                       (cantidadLapiceros * precioLapicero);

    alert(`El monto total de la venta es: $${totalVenta.toFixed(2)}`);
}

calcularTotalVenta();