let a = parseFloat(prompt("Ingrese a"));
let b = parseFloat(prompt("Ingrese b"));

function calculadora(a, b) {

    let sum = a + b;
    let res = a - b;
    let mul = a * b;
    let div;


    if (b == 0) {
        alert("No podemos dividir por 0");
        div = 0;
    } else {
        div = a / b;
    }
    alert(
        `Suma es igual a ${sum}
        Resta es igual a ${res}
        Multiplicación es igual a ${mul}
        División es igual a ${div}`
    )
}

calculadora(a,b); //primero se declara la función que en este caso es calculadora, luego se llaman los argumentos que son en este caso a y b