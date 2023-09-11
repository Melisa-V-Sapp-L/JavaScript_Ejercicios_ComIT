var l;
var cadena;

function letras (l){

	console.log(" ver " + l);
	document.getElementById('pantalla').value += l ;
}

function borrar() {
	console.log("Borrando...");
	document.getElementById('pantalla').value = "";
	
}

function back (){

	console.log("uno atras...");
	var cadena = document.getElementById('pantalla').value;
	document.getElementById('pantalla').value = "";

	for (var i = 0; i < (cadena.length - 1); i++) {
		document.getElementById('pantalla').value +=cadena[i]
	}

}