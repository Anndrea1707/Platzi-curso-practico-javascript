// Taller #1: Figuras

//Código del cuadrado 

function perimetroCuadrado(lado) 
{
    return lado * 4;
}

function AreaCuadrado(lado)
{
    return lado * lado;
}

//Código del triángulo

function perimetroTriangulo(lado1, lado2, baseT)
{
    return lado1 + lado2 + baseT;
} 

function areatriangulo(base, altura)
{
    return (base * altura) / 2;
}


//Código del circulo

//Diámetro

function diametroCirculo(radio)
{
   return radio * 2; 
} 

//PI

const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Área

function areacirculo(radio)
{
    return (radio  * radio) * PI;
} 


// Conexión al HTML 
// Sección cuadrado
function CalcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}


function CalcularAreaCuadrado()
{
    const input = document.getElementByI ("InputCuadrado");

    const value2 = input.value;

    const area = AreaCuadrado(value2);
    alert("El área del cuadrado es: " + area);
}

// Sección triangulo 
function CalcularPerimetroTriangulo()
{
    const input1 = document.getElementById("InputTriangulo1");

    const input2 = document.getElementById("InputTriangulo2");

    const input3 = document.getElementById("InputTriangulo3"); 

    const Value1 = input1.value;
    const value2 = input2.value;
    const Value3 = input3.value;

    const perimetro = perimetroTriangulo(Value1, value2, Value3);
    alert("El perimetro del triángulo es: " + perimetro);
}


function CalcularAreaTriangulo()
{
    const input = document.getElementById("InputTriangulo3"); 

    const input2 = document.getElementById("InputAlturatriangulo");

    const Value1 = input.value;
    const value2 = input2.value;

    const area =areatriangulo(Value1, value2);
    alert("El perimetro del triángulo es: " + area);
}

// Calcular la altura de un triángulo 


function CalcularAlturaTriangulo()
{
    const lado1 = document.getElementById("LadoTriangulo");
    const lado2 = document.getElementById("LadoTrianglo2");
    const base = document.getElementById("BaseTrianguloIsosceles");

    const Value1 = lado1.value;
    const value2 = lado2.value;
    const Value3 = base.value;

    if (Value1 === value2 && Value1 != Value3) 
    {
        alert("Si es un triángulo isósceles")
        const altura = Math.sqrt(Value1**2 - (Value3/2)**2);

        alert("La altura del triangulo es: " + altura);
    } else 
    {
        alert("Lo lamento, no es un triángulo isósceles")
    }
}

// Calcular área y perimetro del circulo 

function CalculaperimetroCirculo ()
{
    const radio = document.getElementById("Radiocirculo");

    const value = radio.value;

    const diametro = diametroCirculo(value);

    const perimetro = perimetroCirculo(diametro);

    alert("El diametro del circulo es: " + diametro + " Por lo tanto el perimetro del circulo es: " + perimetro);
}

function CalcularareaCirculo()
{
    const radio = document.getElementById("Radiocirculo");

    const value = radio.value;

    const area = areacirculo(value);

    alert("El área del circulo es: " + area);
}