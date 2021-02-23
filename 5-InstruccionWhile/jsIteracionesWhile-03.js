/*
CAPUANI TIZIANO
EJERCICIO WHILE 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	

	/*claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{	
		alert("Contraseña Incorrecta");
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("clave ingresada correcta"); */

	do
	{
		claveIngresada = prompt("ingrese el número clave.");   //otra opcion con do while
		

	}while(claveIngresada!="utn750");
	
	alert("clave ingresada correcta");

	
	
}//FIN DE LA FUNCIÓN
