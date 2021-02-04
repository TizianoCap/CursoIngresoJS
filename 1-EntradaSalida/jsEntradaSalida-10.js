/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultadoDevuelto;

	importe=parseInt(document.getElementById("txtIdImporte").value);

	resultadoDevuelto=parseFloat(resultadoDevuelto);
	resultadoDevuelto=importe*25/100;


	resultadoDevuelto=document.getElementById("txtIdResultado").value=resultadoDevuelto;
}
