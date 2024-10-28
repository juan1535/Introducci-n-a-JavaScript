let numero = parseInt(prompt("Ingrese el número"));
let inicio = parseInt(prompt("Ingrese el número inicial"));
let fin = parseInt(prompt("Ingrese el número final"));

(() => {
    for (let i = inicio; i <= fin; i++) {
        if(i === 5) continue;
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
)(numero, inicio, fin);