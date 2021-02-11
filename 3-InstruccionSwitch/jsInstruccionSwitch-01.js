function mostrar()
{
	//tomo el mes
	let meses 
	let mensaje

	meses= document.getElementById("txtIdMes").value;
	
	/*if(meses == "Enero")
	{
		mensaje= "Que comiences bien el año"
	}
	else()
	{
		if(meses== "Marzo")
		{
			mensaje= "A clases"
		}
	}
	alert(meses); */

	switch(meses)
	{
		case"Enero":
		mensaje= "Que comiences bien el año";
		break;

		case"Marzo":
		mensaje= "A clases";
		break;

		case"Julio":
		mensaje= "Se vienen las vacaciones";
		break;

		case"Diciembre":
		mensaje= "Felices fiestas";
		break;
		
		default: mensaje= ""
	}		
	

alert(mensaje);

}//FIN DE LA FUNCIÓN