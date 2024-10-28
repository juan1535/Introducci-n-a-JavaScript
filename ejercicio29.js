    function calcularPromedio() {
    let calificaciones = [];
    let suma = 0;

        for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Ingrese la calificación ${i + 1} (Entre 1-5):`));

        if (nota >= 1 && nota <= 5) {
                calificaciones.push(nota);
                suma += nota;
        } else {
            alert("Calificación fuera de rango, ingrese un valor entre 1 y 5.");
            i--;
        }
    }   

    let promedio = suma / calificaciones.length;

    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
    }
    calcularPromedio();