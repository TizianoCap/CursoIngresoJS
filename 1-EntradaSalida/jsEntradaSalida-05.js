/*
capuani
tiziano
ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"	*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	
	nombre = document.getElementById("txtIdNombre").value; //value tiene que estar en minuscula//
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("su apellido");

	alert(apellido + ", Usted se llama " + nombre  + " y tiene " + edad);
	

}

