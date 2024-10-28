function Area() {
    const figura = prompt("¿Qué figura desea calcular? Escriba 'T' para triángulo o 'C' para círculo:");

    if (figura === "T" || figura === "t") {
        const base = parseFloat(prompt("Ingrese la base del triángulo:"));
        const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        const areaTriangulo = (base * altura) / 2;
        alert(`El área del triángulo es: ${areaTriangulo}`);
    } else if (figura === "C" || figura === "c") {
        const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        const areaCirculo = Math.PI * Math.pow(radio, 2);
        alert(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
    } else {
        alert("Opción inválida.");
    }
}

Area();
