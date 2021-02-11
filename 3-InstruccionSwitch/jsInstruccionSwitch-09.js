function mostrar()
{
	let estacion;
	let mensaje;
	let destino;
	let preciofinal;
	const TARIFA= 15000;
	
	estacion= document.getElementById("txtIdEstacion").value;
	destino= document.getElementById("txtIdDestino").value;
	preciofinal= parseInt(preciofinal);
	

	switch(estacion)
	{
		case"Invierno":    //invierno
			if(destino=="Bariloche")
			{
				preciofinal=(TARIFA*20/100) + TARIFA;
				mensaje=preciofinal;
			}
			if(destino=="Cataratas" || destino=="Cordoba")
			{
				preciofinal=TARIFA - (TARIFA*10/100);
				mensaje=preciofinal;
			}
			if(destino=="Mar del plata")
			{
				preciofinal=TARIFA - (TARIFA*20/100);
				mensaje=preciofinal;
			}
		break;

		case"Verano":    //VERANO
			if(destino=="Bariloche")
			{
				preciofinal=TARIFA - (TARIFA*20/100);
				mensaje=preciofinal;
			}
			else
			{
				if(destino=="Cataratas" || destino=="Cordoba")
			{
				preciofinal=TARIFA + (TARIFA*10/100);
				mensaje=preciofinal;
			}
				if(destino=="Mar del plata")
			{
				preciofinal=TARIFA + (TARIFA*20/100);
				mensaje=preciofinal;
			}
			}
		
		break;
		case"Otoño":   //Primavera Y Otoño
		case"Primavera":
			if(destino=="Bariloche")
			{
				preciofinal=TARIFA +(TARIFA*10/100);
				mensaje=preciofinal;
			}
			else
			{
				if(destino=="Cataratas")
				{
					preciofinal=TARIFA +(TARIFA*10/100);
					mensaje=preciofinal;
				}
				if(destino=="Mar del plata")
				{
					preciofinal=TARIFA +(TARIFA*10/100);
					mensaje=preciofinal;
				}
				else
				{
					if(destino=="Cordoba")
					{
						mensaje=TARIFA; 
					}
				}
			}
		break;
	}

	alert("$"+mensaje);
	
	
}//FIN DE LA FUNCIÓN