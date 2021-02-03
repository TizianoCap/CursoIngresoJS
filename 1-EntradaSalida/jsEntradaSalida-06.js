/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta
	
	numeroUno=parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt (document.getElementById('txtIdNumeroDos').value);
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno+numeroDos;
	respuesta="el resultado es: "+resultado;

	//alert(numeroUno);
	alert(respuesta);

	//alert(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value));
}

