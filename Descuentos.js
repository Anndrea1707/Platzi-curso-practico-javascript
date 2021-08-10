// Taller #2: Porcentajes y descuentos

function CalcularPrecioConDescuento(precio, descuento)
{
    const precioFinal = (precio * (descuento-100))/100;

    return precioFinal;
}

// Conectado al HTML
function CalcularprecioFinal(){

    const precioInput = document.getElementById("Inputprecio");
    const precio = precioInput.value;

    const descuentoInput = document.getElementById("InputDescuento");
    const descuento = descuentoInput.value;

    const preciototal = CalcularPrecioConDescuento(precio, descuento);

    const Resultado = document.getElementById("ResultP");

    Resultado.innerHTML = ("El precio final con descuento es: $" + preciototal);
}
