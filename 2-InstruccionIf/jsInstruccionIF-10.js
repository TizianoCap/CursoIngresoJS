/*CAPUANI TIZIANO
Ejercicio IF 10
enunciado:Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let nota;
	let mensaje;

	nota=Math.floor(Math.random()*10) + 1;

	/*if(nota > 8)
	{
		alert("Excelente! tu nota es: " + nota);
	}
	else 
	{
	    if (numero > 3)
	   {
		alert("Aprobo. la nota es: " + nota );
	   }
	    else
	   {
		alert("Vamos, la proxima se puede. tu nota es: " + nota);
	   }
    }*/
	if(nota > 8)
	{
		mensaje="Excelente!";
	}
	else 
	{
	    if (nota > 3)
	   {
		mensaje="Aprobo.";
	   }
	    else
	   {
		mensaje="Vamos, la proxima se puede.";
	   }
    }
	alert(mensaje+ " La nota es: " + nota);

}//FIN DE LA FUNCIÓN