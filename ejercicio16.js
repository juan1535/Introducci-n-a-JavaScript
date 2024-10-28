let distancia = parseFloat(prompt("Distacia en km:"));

let tiempo = parseFloat(prompt("Tiempo en minutos:"));

function calculo(d, t) {
    let distanciaEnMetros = d * 1000;
    let tiempoEnSegundos = t * 60;
    let velocidad = distanciaEnMetros / tiempoEnSegundos
    alert(`La velocidad es ${velocidad} m/s`);
}

calculo(distancia, tiempo)