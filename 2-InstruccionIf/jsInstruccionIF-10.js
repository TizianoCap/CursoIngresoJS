function mostrar()
{
	let numero;

	numero=Math.floor(Math.random()*10) + 1;

	if(numero <= 10 && numero >= 9)
	{
		alert("Excelente! tu nota es: " + numero);
	}
	else if (numero >= 4)
	{
		alert("Aprobo. la nota es: " + numero );
	}
	else
	{
		alert("Vamos, la proxima se puede. tu nota es: " + numero);
	}

}//FIN DE LA FUNCIÓN