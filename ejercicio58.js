function obtenerSignoZodiacal() {

    const mes = prompt("Ingrese el nombre del mes:").toLowerCase().trim();

    let signoZodiacal;

    if (mes === "enero") {
        signoZodiacal = "Capricornio (hasta el 19), Acuario (a partir del 20)";
    } else if (mes === "febrero") {
        signoZodiacal = "Acuario (hasta el 18), Piscis (a partir del 19)";
    } else if (mes === "marzo") {
        signoZodiacal = "Piscis (hasta el 20), Aries (a partir del 21)";
    } else if (mes === "abril") {
        signoZodiacal = "Aries (hasta el 19), Tauro (a partir del 20)";
    } else if (mes === "mayo") {
        signoZodiacal = "Tauro (hasta el 20), Géminis (a partir del 21)";
    } else if (mes === "junio") {
        signoZodiacal = "Géminis (hasta el 20), Cáncer (a partir del 21)";
    } else if (mes === "julio") {
        signoZodiacal = "Cáncer (hasta el 22), Leo (a partir del 23)";
    } else if (mes === "agosto") {
        signoZodiacal = "Leo (hasta el 22), Virgo (a partir del 23)";
    } else if (mes === "septiembre") {
        signoZodiacal = "Virgo (hasta el 22), Libra (a partir del 23)";
    } else if (mes === "octubre") {
        signoZodiacal = "Libra (hasta el 22), Escorpio (a partir del 23)";
    } else if (mes === "noviembre") {
        signoZodiacal = "Escorpio (hasta el 21), Sagitario (a partir del 22)";
    } else if (mes === "diciembre") {
        signoZodiacal = "Sagitario (hasta el 21), Capricornio (a partir del 22)";
    } else {
        alert("ERROR: Por favor, ingrese un mes válido.");
        return;
    }

    alert(`Mes: ${mes.charAt(0).toUpperCase() + mes.slice(1)}
    > Signo zodiacal: ${signoZodiacal}`);
}

obtenerSignoZodiacal();