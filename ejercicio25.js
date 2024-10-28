let costoMedicamento = parseFloat(prompt("Ingrese el costo del medicamento:"));


function precioFinal(descuento, medicamento) {                  //  Dentro una función, en este caso: "precioFinal" no se pueden redefinir las variables, en este caso:  "descuento" y "medicamento" 
    let montoDescuento = medicamento * descuento;               //  porque lo que causa es confusión. Se debe usar nombres diferentes para los parámetros de la función o evitar la redefinición.
    let precioConDescuento = medicamento - montoDescuento;
    return precioConDescuento;                                   //  La función (precioFinal) no retorna ningún valor. Se debe usar "return" para devolver el precio calculado.
}

let descuento = 0.10;
let precio = precioFinal(descuento, costoMedicamento);

alert(`El precio del medicamento aplicando el descuento del 10% es de: ${precio}`); // En el alert no se debe de tratar de mostrar la función en sí, sino su resultado. (Por eso se crea "precio") 
                                                                                    // Se debe llamar a la función (precio = precioFinal) y pasar los argumentos adecuados (descuento, costoMedicamento)).