function dineroTotal() {
    const precioLlaves = 11500;
    const precioBomba = 1168000;
    const precioPernos = 87000;
    const llavesCompradas = 5;
    const cajasPernosCompradas = 3;
    const dineroSobrante = 91000;

    const totalLlaves = precioLlaves * llavesCompradas;
    const totalPernos = precioPernos * cajasPernosCompradas;
    const totalGastado = totalLlaves + precioBomba + totalPernos;

    const dineroInicial = totalGastado + dineroSobrante;

    alert(`El dinero inicial que tenía el jefe de obra era: $${dineroInicial}`);
}

dineroTotal();
