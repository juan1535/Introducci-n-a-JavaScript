function evaluarCalificaciones() {
    const calificaciones = [];
    let maximaCalificacion = 0, minimaCalificacion = 100;
    let conteoMaximos = 0, conteoA = 0, conteoB = 0, conteoC = 0, conteoD = 0;

    while (true) {
        const ingresoNota = parseInt(prompt("Ingrese una calificación (1-100) o 0 para finalizar:"));

        if (ingresoNota === 0) break;

        if (isNaN(ingresoNota) || ingresoNota < 1 || ingresoNota > 100) {
            alert("ERROR: Debe ingresar una calificación válida entre 1 y 100.");
            continue;
        }

        calificaciones.push(ingresoNota);

        maximaCalificacion = Math.max(maximaCalificacion, ingresoNota);
        minimaCalificacion = Math.min(minimaCalificacion, ingresoNota);

        if (ingresoNota === 100) conteoMaximos++;

        if (ingresoNota >= 90) conteoA++;
        else if (ingresoNota >= 80) conteoB++;
        else if (ingresoNota >= 70) conteoC++;
        else if (ingresoNota >= 60) conteoD++;
    }

    const totalReprobados = calificaciones.length - (conteoA + conteoB + conteoC + conteoD);
    alert(`\nResultados:\n` +
          ` > Calificación más alta: ${maximaCalificacion}\n` +
          ` > Calificación más baja: ${minimaCalificacion}\n` +
          ` > Cantidad de calificaciones máximas (100): ${conteoMaximos}\n` +
          `\nDistribución de calificaciones:\n` +
          ` > A (90-100): ${conteoA}\n` +
          ` > B (80-89): ${conteoB}\n` +
          ` > C (70-79): ${conteoC}\n` +
          ` > D (60-69): ${conteoD}\n` +
          ` > Reprobados (<60): ${totalReprobados}`);
}

evaluarCalificaciones();