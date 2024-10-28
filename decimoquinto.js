function ruleta() {
    const numero = Math.floor(Math.random() * 10) + 1;

    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
}

ruleta();
