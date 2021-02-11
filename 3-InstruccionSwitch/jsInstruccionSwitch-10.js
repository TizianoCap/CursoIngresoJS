function mostrar()
{
	let estacion;
	let mensaje;
	let destino; 
	estacion=document.getElementById("txtIdEstacion").value;
	destino= document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case"Invierno":
			if(destino=="Bariloche")
			{
				mensaje="Este viaje esta disponible"
			}
			else
			{
				mensaje="el viaje a este destino no esta disponible"
			}
		break;
		
		case"Verano":
			if(destino=="Cataratas" || destino=="Mar del plata")
			{
				mensaje="Este viaje esta disponible"
			}
			else
			{
				mensaje="El viaje a este destino no esta disponible"
			}
		break;
		
		case"Otoño":
			mensaje="Este viaje esta disponible"
		break;

		case"Primavera":
			if(destino=="Bariloche")
			{
				mensaje="El viaje a este destino no esta disponible"
			}
			else
			{
				mensaje="Este viaje esta disponible"
			}
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN