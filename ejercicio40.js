function Edad() {
    const nacimiento = parseInt(prompt("Ingrese el año en que nació:"));
    const actualidad = new Date().getFullYear();

    if (isNaN(nacimiento) || nacimiento > actualidad || nacimiento < 1500) {
        alert("Por favor, ingrese un año de nacimiento válido.");
        return;
    }

    const edad = actualidad - nacimiento;
    alert(`La edad de la persona es: ${edad} años.`);
}

Edad();
