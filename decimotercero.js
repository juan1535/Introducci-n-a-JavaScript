function devolverVocales(cadena) {
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        if (!vocales.includes(cadena[i])) {
            resultado += cadena[i];
        }
    }

    return resultado;
}


const cadenaOriginal = prompt("")
alert (cadenaSinVocales = devolverVocales(cadenaOriginal));