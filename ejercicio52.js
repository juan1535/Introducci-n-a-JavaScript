function obtenerTarifa(tipoEmpleado) {
    const Tarifa_Planta = 20000;
    const Tarifa_Administrativo = 10000;

    if (tipoEmpleado === "planta") return Tarifa_Planta;
    if (tipoEmpleado === "administrativo") return Tarifa_Administrativo;
    
    return null; // Indica un tipo de empleado no válido
}

function calcularSalario(tipoEmpleado, horasTrabajadas) {
    const tarifa = obtenerTarifa(tipoEmpleado);
    return tarifa ? tarifa * horasTrabajadas : null;
}

function mostrarResultados(tipoEmpleado, horasTrabajadas, salario) {
    alert(`
    Resultados:
    Tipo de empleado: ${tipoEmpleado}
    Horas trabajadas: ${horasTrabajadas}
    Salario total: $${salario.toFixed(2)}
    `);
}

function iniciarCalculoSalario() {
    const tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();
    const horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

    if (!["planta", "administrativo"].includes(tipoEmpleado) || isNaN(horasTrabajadas) || horasTrabajadas < 0) {
        alert("ERROR: Datos ingresados no son válidos.");
        return;
    }

    const salario = calcularSalario(tipoEmpleado, horasTrabajadas);

    if (salario !== null) {
        mostrarResultados(tipoEmpleado, horasTrabajadas, salario);
    } else {
        alert("ERROR: Tipo de empleado inválido.");
    }
}

iniciarCalculoSalario();