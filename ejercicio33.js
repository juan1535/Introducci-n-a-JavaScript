function calcularEdadMadre() {
    const edadMadre = parseInt(prompt("Ingresa la edad actual de la madre:"));
    const edadHijo = parseInt(prompt("Ingresa la edad actual del hijo:"));
    
    if (edadMadre <= edadHijo) {
        alert("La edad de la madre debe ser mayor que la del hijo.");
        return;
    }
    
    const edadMadreAlDarALuz = edadMadre - edadHijo;
    alert(`La madre tenía ${edadMadreAlDarALuz} años cuando dio a luz a su hijo.`);
}

calcularEdadMadre();