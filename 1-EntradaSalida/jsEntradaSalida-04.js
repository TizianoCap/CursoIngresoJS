/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
// guardo en la variable nombre el texto que escribio en ususario dentro de la ventana pront
	nombre = prompt("ingrese su nombre");
//copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina
	document.getElementById("txtIdNombre").nodeValue = nombre;
	
	

}

