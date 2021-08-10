// Taller #3: Meidiana 

const Lista1 = [100,200,500,4000000,150];

const mitadLista1 = parseInt(Lista1.length / 2);

function esPar(numero)
{
    if (numero % 2 === 0)
    {
        return true;

    } else {

        return false;
    }
}

let mediana;

function CalcularMediaAritmetica(Lista)
{

    const sumaLista = Lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) 
    {
        return valorAcumulado + nuevoElemento;
    }
    );

    const promedioLista = sumaLista / Lista.length;

    return promedioLista;

}

if (esPar(Lista1.length))
{

    const elemento1 = Lista1[mitadLista1 - 1];
    const elemento2 = Lista1[mitadLista1];

    const promedioElemento1y2 = CalcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;

} else {
    
    mediana = Lista1[mitadLista1];

}