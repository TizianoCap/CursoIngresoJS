function mostrar()
{
    let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17) //si edad es mayor e igual que 13 y edad es menor e igual a 17 aparece la alert
	{
		alert("eres un teenager");
	}

}//FIN DE LA FUNCIÓN