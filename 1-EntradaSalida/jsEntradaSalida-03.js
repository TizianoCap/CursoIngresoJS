/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado+txtIdNombre.value;  otra forma //
	//id es recomendable(obligatorio) copiarlo de html//
	nombreIngresado=document.getElementById('txtIdNombre').value;
	
	alert(nombreIngresado);

}


