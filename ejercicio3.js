let dividendo, divisor, resultado;

try {
    dividendo = parseFloat(prompt("Ingrese el dividendo")); // El parseFloat es para pasar una cadena de texto a un número flotante, las cadenas de texto concatenan más no suman
    divisor = parseFloat(prompt("Ingrese el divisor"));
    if(divisor === 0) {
        throw new Error(`El divisor es ${divisor}, no se puede realizar la división`); //Throw new Error es para crear un mensaje de error personalizado
    }
    resultado = dividendo / divisor;
    alert(`El resultado de ${dividendo} / ${divisor} = ${resultado}`);
} catch (error) {
    console.error(error.message);
}