let palabra = prompt("Ingrese la palabra");

const silabas = (palabra) => {
    // const contar = /[aeiouáéíóú](?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;  // global: buscará todas las coincidencias en la cadena de texto // y la i es por insensible (a minusculas y mayusculas).
    const contar = /[aeiou]/gi;
    const cantidad = palabra.match(contar); //Match retorna en una array y da la cantidad (números)  // Los () = son funciones o metodos
    console.log(cantidad);
}

silabas(palabra);

