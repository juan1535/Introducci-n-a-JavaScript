let rentaAnual = parseFloat(prompt("Ingrese su valor de renta anual"));
if (rentaAnual < 0) {
    alert("valor inválido");
} else {
    if (rentaAnual > 0 && rentaAnual < 10000) {
        alert("No tendrá impositivo");
    } else if (rentaAnual >= 10000 && rentaAnual < 20000) {
        alert(`El impositivo es del 5% (${ rentaAnual.toFixed (2) * 0.05})`)
    } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
        alert(`El impositivo es del 10% (${ rentaAnual.toFixed (2) * 0.1})`)
    } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
        alert(`El impositivo es del 20% (${ rentaAnual.toFixed (2) * 0.2})`)
    } else {
        alert(`El impositivo es del 45% (${rentaAnual.toFixed(2) * 0.45})`)
    }
}