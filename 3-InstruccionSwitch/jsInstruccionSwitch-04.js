/*
Capuani Tiziano
Ejercicio 4
*/
function mostrar()
{
	
	let meses; 
	let mensaje;

	meses= document.getElementById("txtIdMes").value;
	
	switch(meses)
	{
		case"Febrero":
		mensaje="este mes tiene 28 dias.";
		break;

		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
		mensaje="este mes tiene 31 dias.";
		break;

		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		mensaje="este mes tiene 30 dias.";
		break;
	}
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN