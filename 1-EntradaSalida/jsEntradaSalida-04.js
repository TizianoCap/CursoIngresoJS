/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	
	// tomar datos nombreIngresado=document.getElementById('txtIdNombre').value;//
	nombreIngresado=prompt("ingrese nombre");
	document.getElementById('txtIdNombre').value="su nombre es "+nombreIngresado+" bienvenido/a";
	//muestra datos//

	alert(nombreIngresado);
	
	/* entrada
	nombreIngresado=prompt("ingrese nombre")
	nombreIngresado=document.getElementById('txtIdNombre').value;
	
	mostrar
	alert(nombre);
	document.getElementById('txtIdNombre').value=nombreIngresado;
	alert("nombre ingresado " + nombreIngresado); */
}

