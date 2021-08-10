// Reto de crear tu propio calculo 

function CalcularGananciasMensuales(ingresos, gastos )
{
    const resultado = ingresos - gastos;

    return resultado;
}

// Concctar al HTML

function GananciasMensuales()
{
    const ingresos = document.getElementById("Input-ingresos");

    const gastos = document.getElementById("Input-gastos");

    const value1 = ingresos.value;
    const value2 = gastos.value;

    const gananciasTotal = CalcularGananciasMensuales(value1, value2);

    const result = document.getElementById("Result-ganancias");

    result.innerHTML = ("Tus ganancias mensuales son de: $" + gananciasTotal);
}

// Calcular ganancias anuales

function CalcularGananciasAnuales(ingresos, gastos)
{
    const total = (ingresos - gastos) * 12;

    return total;
}

function GananciasAnuales()
{
    const ingresos = document.getElementById("Input-ingresos");

    const gastos = document.getElementById("Input-gastos");

    const value1 = ingresos.value;
    const value2 = gastos.value;

    const gananciasTotal = CalcularGananciasAnuales(value1, value2);

    const result = document.getElementById("Ganancias-anuales");

    result.innerHTML = ("Tus ganancias anuales son de: $" + gananciasTotal);
}