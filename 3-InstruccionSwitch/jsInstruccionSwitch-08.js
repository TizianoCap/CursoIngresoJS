function mostrar()
{
	let destinoIngresado;
	let mensaje;
	destinoIngresado= document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case"Bariloche":
		mensaje="en este lugar el clima es frio";
		break;

		case"Cataratas":
		mensaje="en este lugar el clima es caliente";
		break;

		case"Mar del plata":
		mensaje="en este lugar el clima es caliente";
		break;

		case"Ushuaia":
		mensaje="en este lugar el clima es frio";
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN