function Alarma(temperatura, presion) {
    if (presion > 200 || temperatura > 100) {
        return "Alarma";
    } else {
        return "Todo en orden.";
    }
}

const temperatura = parseFloat(prompt("Ingrese la temperatura:"));
const presion = parseFloat(prompt("Ingrese la presión:"));
alert(Alarma(temperatura, presion));
