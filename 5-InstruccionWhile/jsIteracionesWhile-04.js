/*
CAPUANI TIZIANO
EJERCICIO WHILE 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado =parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		alert("INCORRECTO"); 
		numeroIngresado =parseInt(prompt("ingrese un numero entre el 0 y 9"));
	}
	
	alert("Mil Gracias")

	txtIdNumero.value=numeroIngresado;
}//FIN DE LA FUNCIÓN