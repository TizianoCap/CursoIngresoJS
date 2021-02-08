function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 18)
	{
		alert("eres un adult");
	}
	if( edad < 13)
	{
		alert("eres un niño");
	}
	if( edad >= 13 && edad <= 17)
	{
		alert("you are a adolecente");
	}

/*  if(edad < 13)
    {
	alert("eres un niño")
    }
    else if (edad < 18) 
	{
		alert ("eres un adolecente")
	}
	else
	{
		 alert("es adulto")
	}
	otra forma hacerloS
	*/

}//FIN DE LA FUNCIÓN