/*
Capuani
Tiziano
Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()   //txtIdNumeroUno txtIdNumeroDos//
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;
	
	numeroUno=parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt (document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	respuesta="el resultado es "+resultado;

	alert(respuesta);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;
	
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno-numeroDos;
	respuesta="el resultado es "+resultado;

	alert(respuesta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;
	
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno*numeroDos;
	respuesta="el resultado es "+resultado;

	alert(respuesta);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;

	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno/numeroDos;
	respuesta="el resultado es "+resultado;

	alert(respuesta);
}

