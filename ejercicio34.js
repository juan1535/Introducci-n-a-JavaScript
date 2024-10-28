function tiempollenado() {
    const radio = parseFloat(prompt("Ingresa el radio del depósito en metros:"));
    const altura = parseFloat(prompt("Ingresa la altura del depósito en metros:"));
    const litros = parseFloat(prompt("Ingresa el caudal en litros por segundo:"));
    
    const PI = Math.PI;
    
    const volumen = PI * Math.pow(radio, 2) * altura * 1000;
    
    const segundos = volumen / litros;
    
    const tiempoEnMinutos = segundos / 60;
    
    alert(`El tiempo estimado para llenar el depósito es de aproximadamente ${tiempoEnMinutos.toFixed(2)} minutos.`);
}

tiempollenado();