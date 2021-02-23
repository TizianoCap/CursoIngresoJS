/*
Capuani Tiziano
Ejecicio 8 while
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numero;
	let sumapositivo;
	let multiplinegativa;
	let flag;
	
	flag=0;
	sumapositivo=0;
	multiplinegativa=1;
	respuesta= prompt("quiere ingresar un numero?? si/no");
	
	while(respuesta== "si")
	{
		numero=parseInt(prompt("ingrese un numero"));
		if(numero<0)
		{
			multiplinegativa=multiplinegativa*numero;
			flag=1;
		}
		else
		{	
			sumapositivo=sumapositivo+numero;	
		}
		respuesta= prompt("quiere ingresar otro numero?? si/no");
	}

	document.getElementById("txtIdSuma").value=sumapositivo;
	
	if(flag==0)
	{
		multiplinegativa=0;
	}
	
	document.getElementById("txtIdProducto").value=multiplinegativa;
	


}//FIN DE LA FUNCIÓN