function mostrar()
{
	let destinoIngresado; 
	let mensaje;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case"Bariloche":
		mensaje="esta ubicada en el oeste del pais";
		break;

		case"Cataratas":
		mensaje="esta ubicada en el norte del pais";
		break;

		case"Mar del plata":
		mensaje="esta ubicada en el este del pais";
		break;

		case"Ushuaia":
		mensaje="esta ubicada en el sur del pais";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN