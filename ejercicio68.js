function tablasDeMultiplicar() {
    for (let num = 1; num <= 10; num++) {
        console.log(`\nTabla del ${num}:`);
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            console.log(`${num} x ${multiplicador} = ${num * multiplicador}`);
        }
    }
}

tablasDeMultiplicar();
