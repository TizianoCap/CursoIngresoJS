/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre
	let edad

	nombre = document.getElementById("txtIdNombre").Value;
	edad = document.getElementById("txtIdEdad").Value;
	alert("usted se llama " + nombre + " y tiene " + edad + " años");
}

