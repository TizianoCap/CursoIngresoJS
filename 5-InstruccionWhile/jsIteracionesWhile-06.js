function mostrar()
{
	let contador;
	let acumulador;
	let numero;

	contador=0;
	acumulador=0;
	
	while(contador<5);
	{
		numero= parseFloat(prompt("ingrese un numero"));
		acumulador= acumulador + numero;
		contador++; //contado++;
	}
	//tambien se puede crear la variable promedio y poner promedio= acumulador/5
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN