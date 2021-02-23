/*
CAPUANI TIZIANO
EJERCICIO WHILE 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	/*sexoIngresado= prompt("ingrese f(femenino) o m(masculino).");
	
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		alert("NECESITAMOS QUE IDENTIFIQUE SU SEXO");
		sexoIngresado= prompt("ingrese f(femenino) o m(masculino).");
	}*/

	do
	{
		sexoIngresado= prompt("ingrese f(femenino) o m(masculino).");

	}while(sexoIngresado!="f" && sexoIngresado!="m");
	
	alert("gracias");

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN