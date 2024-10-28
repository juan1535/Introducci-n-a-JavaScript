let centigrados = parseFloat(prompt("Ingrese los grados centígrados que quiere transformar a Fahrenheit:"));

function calculo(centigrados) {
    let gradosCentigrados = (centigrados * 9/5) + 32;
    return gradosCentigrados;
}

let grados = calculo(centigrados);

alert(`Grados Fahrenheit: ${grados}`);