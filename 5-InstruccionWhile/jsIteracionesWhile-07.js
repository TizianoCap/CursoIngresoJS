/*
Capuani Tiziano
Ejercicio 7 while
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero;

	contador=0;
	acumulador=0;
	respuesta=prompt("quiere ingresar un numero? si/no");

	while(respuesta== "si")
	{
		numero=parseInt(prompt("ingrese un numero"));
		acumulador=acumulador + numero;
		contador++;
		respuesta=prompt("quiere ingresar otro numero? si/no");
		
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN