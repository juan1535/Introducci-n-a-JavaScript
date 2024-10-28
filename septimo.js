let numeros = [10, 25, 99, 1, 75, 3];

function elMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (mayor < arreglo[i]) {
            mayor = arreglo[i];
        }
    }
    console.log(`El número mayor es ${mayor}`);
}


elMayor(numeros)
