function mostrar()
{
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadocivil != "soltero")
	{
		alert("es muy joven para no ser soltero");
	}
	
/* if(edad < 18)
	{
		if(estadocivil != "soltero")
		{
			alert("es muy joven para NO ser soltero");
		}
		
	}
*/
}//FIN DE LA FUNCIÓN