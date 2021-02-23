/*
Capuani Tiziano
Ejercicio 9 while
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let respuesta;

	banderadelprimero=true;

	respuesta= prompt("quiere ingresar un numero?? si/no");

	while(respuesta=="si")
	{
		numero= parseInt(prompt("ingrese un numero"));
		
		if(banderadelprimero==true || numero<minimo)
		{
			minimo= numero;
			banderadelprimero=false;
		}
		else 
		{
			if(banderadelprimero==true || numero>maximo);
			{
				maximo= numero;
			}
		}
		respuesta= prompt("quiere ingresar otro si/no");
		
	}

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;
}//FIN DE LA FUNCIÓN