function PagoCursos() {

    const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

    if (isNaN(cantidadCursos) || cantidadCursos < 0) {
        alert("ERROR: Por favor, ingrese una cantidad válida de cursos.");
        return;
    }

    const precioPorCurso = cantidadCursos < 6 ? 2000000 : 1200000;
    const costoTotal = precioPorCurso * cantidadCursos;

    alert(`La cantidad de cursos es: ${cantidadCursos}\n` +
          `Precio por curso: $${precioPorCurso.toLocaleString()}\n` +
          `Costo total a pagar: $${costoTotal.toLocaleString()}`);
}

PagoCursos();
