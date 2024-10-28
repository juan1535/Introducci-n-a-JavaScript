function Primo() {
    const numero = parseInt(prompt("Por favor, introduce un número entero positivo:"));

    if (isNaN(numero) || numero <= 1) {
        alert("Por favor, introduce un número entero positivo mayor que 1.");
        return;
    }

    let Primo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }

    if (Primo) {
        alert(`El número ${numero} es primo.`);
    } else {
        alert(`El número ${numero} no es primo.`);
    }
}

Primo();
