function mostrar()
{
	//tomo el mes
	let meses;
	
	meses= document.getElementById("txtIdMes").value;
	
	switch(meses)
	{
		case"Enero":
		case"Febrero":
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
			alert("Falta para el invierno");
		break;

		case"Julio":
		case"Agosto":
			alert("Abrigate que hace frío");
		break;

		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
		break;

		
	}	
	
	

}//FIN DE LA FUNCIÓN 
/*Abrigate que hace frio
Falta para el invierno.
Ya pasamos el frio, ahora calor!!!.*/