let palabra = prompt("Ingrese una palabra");

const calcular = (palabra) => {
    return (palabra.length < 5) ? "La palabra es corta" : "La palabra es larga";
}

let resultado = calcular(palabra);
alert(resultado);