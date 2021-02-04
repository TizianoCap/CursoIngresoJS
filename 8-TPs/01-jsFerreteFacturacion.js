/*
Capuani
Tiziano
TP 10
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultado;
    let respuesta;

    numero1=parseInt(document.getElementById("txtIdPrecioUno").value);
    numero2=parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3=parseInt(document.getElementById("txtIdPrecioTres").value);

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);
    resultado=numero1+numero2+numero3;
    respuesta="el resultado es: "+resultado;

    alert(respuesta)
	
}
function Promedio () 
{
    let promedio1;
    let promedio2;
    let promedio3;
    let resultado;
    
    
    promedio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    promedio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    promedio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=(promedio1+promedio2+promedio3)/3;
    //resultado=resultado.toFixed(2); otra forma de ponerlo y se aplica a todos los "resultados"
    alert("el promedio es "+resultado.toFixed(2));


}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultado;
    let IVA;
    let resultadofinal

    numero1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    numero2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    numero3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=numero1+numero2+numero3;
    IVA=resultado*21/100;
    resultadofinal=resultado+IVA;

    alert("el resultado de los precios mas IVA es: "+resultadofinal.toFixed(2));

}