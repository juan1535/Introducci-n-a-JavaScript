let contraseña = "Franco15350";

function esAlfanumerico(texto) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(texto);
}

function comprobrarContraseña(){ 
    let password = prompt ("Ingresa tu contraseña");

    if (contraseña.toLowerCase() === password.toLowerCase()) //no pasa nada en el orden, no afecta, el orden de los factores no altera el producto
    {
        return;
    } else {
        alert("La contraseña es incorrecta, intentalo nuevamente.");
        
    }
}
comprobrarContraseña();






// Ejercicio hecho por el instructor Jhon:

// let contraseña = "contraseña12345"

// while (true) {
//     let contraseñaDos = prompt("Ingrese la contraseña");
//         if (/^[a-zA-Z0-9]+$/.test(contraseñaDos)) {
//             if (contraseñaDos.toLocaleLowerCase() === contraseña.toLocaleLowerCase ()) {
//                 alert ("Contraseña correcta");
//                 break
//             } else {
//                 alert("Contraseña incorrecta, Inténtelo nuevamente")
//             } 
//         } else {
//             alert ("Por favor, ingrese solo valores alfanumericos");
//         }
// }