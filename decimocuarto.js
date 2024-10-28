function inversoAditivo(numeros) {
    const resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(-numeros[i]);
    }

    return resultado;
}

const numeros = [3, -7, 5, -1, 0];
const inversos = inversoAditivo(numeros);
console.log(inversos);
