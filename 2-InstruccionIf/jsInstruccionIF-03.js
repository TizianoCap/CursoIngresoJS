function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("eres mayor de edad");
	}
	if(edad < 18)     //en este caso tambien se puede utilisar else(si no) para no repetir el if
	{
		alert("eres menor de edad");	
	}
	

}//FIN DE LA FUNCIÓN