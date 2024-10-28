let pizza = parseInt(prompt(
`1.- Pizza vegetariana 
2.- Pizza no vegetariana
Ingrese su opción (número)`));

let ingrediente, ingredienteExtra, comprobarEleccion = true, tipoPizza;

if (pizza <= 0 || pizza >= 3) {
    alert("Valor inválido")
} else if (pizza === 1){
    tipoPizza = "Vegetariana";
    while (comprobarEleccion) {
        ingrediente = parseInt(prompt(`
            1.- Pimiento
            2.-Tofu
            Ingrese su opción (Número)
            `));
            if (ingrediente === 1) {
                ingredienteExtra = "Pimiento";
                comprobarEleccion = false;
        } else if (ingrediente === 2) {
            ingredienteExtra = "Tofu";
            comprobarEleccion = false;
        } else {
            alert("Valor invalido");
        }
    }
} else if (pizza === 2) {
    tipoPizza = "No vegetariana";
    while (comprobarEleccion) {
        ingrediente = parseInt (prompt(`
            1.-Peperoni
            2.- Jamón
            3.- Salmón
            Ingrese su opción (Número)`
        ));
        if (ingrediente !== 1 && ingrediente !== 2 && ingrediente !== 3) {
            alert("No eligio ningún ingrediente válido")
        } else if (ingrediente === 1) {
            ingredienteExtra = "Peperoni";
            comprobarEleccion = false; 
        } else if (ingrediente === 2) {
            ingredienteExtra = "Jamón";
            comprobarEleccion = false;
        } else {
            ingredienteExtra = "Salmón";
            comprobarEleccion = false;
        }
    }
}
alert(`Pizza ${tipoPizza} con:
    -Mozzarella
    -Tomate
    -${ingredienteExtra}
    `)