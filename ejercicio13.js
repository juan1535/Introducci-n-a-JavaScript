function media(...numeros) { //todo lo que llega lo transforma en un arreglo, el parametro rest resibe una secuencia de números y los transforma en un arreglo
    let arreglo = numeros[0];
    console.log(arreglo);
    
    let sum = 0;
    for(let num of numeros) {
        console.log(num);
        
        sum += num;
    }
    let media = sum / numeros.length;
    return media;
}

let numeros = [];

while (true) {
    let num = parseFloat (prompt(`
        Ingrese el número
        0 para salir
        `));
    if (num != 0) {
        numeros.push(num);
        } else {
        break;
    }
}

let resultado = media(...numeros);
alert(`La media es: ${resultado}`);