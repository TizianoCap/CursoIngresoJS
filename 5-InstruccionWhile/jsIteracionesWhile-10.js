/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. v
2-Suma de los positivos. v
3-Cantidad de positivos. 
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumapositivo=0;
	let cantidadPositivos=0;
	let cantidadnegativos=0;
	let Promediopositivos;
	let Promedionegativos;
	

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado= parseInt(prompt("ingrese un numero"));
		if(numeroIngresado>0)
		{
			sumapositivo=sumapositivo + numeroIngresado;
			cantidadPositivos++;
			Promediopositivos=numeroIngresado / cantidadPositivos; 
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos + numeroIngresado;
				cantidadnegativos++;
				Promedionegativos=numeroIngresado / cantidadnegativos;
			}
		}
		respuesta=prompt("desea continuar?");
	}

	document.write("la suma de negativos es :"+sumaNegativos + "<br>");
	document.write("la suma de positivos es :"+sumapositivo + "<br>");
	document.write(" la cantidad de positivos es:"+cantidadPositivos + "<br>");
	document.write("la cantidad de negativos es:"+cantidadnegativos + "<br>");
	document.write("el promedio de los positivos es:"+Promediopositivos + "<br>");
	document.write("el promedio de los negativos es:"+Promedionegativos + "<br>");
}//FIN DE LA FUNCIÓN   //