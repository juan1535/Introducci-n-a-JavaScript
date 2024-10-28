function sumarYConvertirABinario(num1, num2) {
    const suma = num1 + num2;
    return suma.toString(2);
}

const resultado = sumarYConvertirABinario(5, 3);
console.log(resultado);