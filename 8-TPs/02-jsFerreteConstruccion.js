/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
     let largo;
     let ancho;
     let perimetro;
     const CANTIDAD_ALAMBRE= 3;
     let alambre;

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    perimetro= (largo + ancho) * 2; //una vuelta de alambre
    alambre= perimetro * CANTIDAD_ALAMBRE;

    alert("se deben comprar "+ alambre + " metros de alambre");

}
function Circulo () 
{
    let radio;
    const CANTIDAD_ALAMBRE= 3;
    let alambre;

    radio=parseFloat(document.getElementById("txtIdRadio").value);

    alambre=radio * CANTIDAD_ALAMBRE;

    alert("se debe comprar " + alambre + " metros de alambre")
}
function Materiales () 
{
    let largo;
    let ancho;
    const CEMENTO= 2;
    const CAL= 3;
    let cemento;
    let cal;
    let perimetro;
    
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    perimetro=(largo + ancho) *2;
    cemento=perimetro * CEMENTO;
    cal=perimetro * CAL;

    alert("se necesitan " + cemento + " bolsas de cemento y de cal " + cal + " bolsas");
}