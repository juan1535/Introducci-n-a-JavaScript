function sumaNumerosPositivos(arruru) {
    let suma = 0;

    for (let i = 0; i < arruru.length; i++) {
        if (arruru[i] > 0) {
            suma += arruru[i];
        }
    }

    return suma;
}

const numeros = [-5, 3, 2, -1, 0, 7, -4];
const resultado = sumaNumerosPositivos(numeros);
console.log(resultado);