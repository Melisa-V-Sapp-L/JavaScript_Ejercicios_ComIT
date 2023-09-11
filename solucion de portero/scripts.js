function llamar() {
	console.log("entro en la fn llamar");
	var txtPiso = document.getElementById('piso').value;
	var txtDpto = document.getElementById('dpto').value;
	txtPiso = parseInt(txtPiso);	
	txtDpto = parseInt(txtDpto);	
// 00 a 42 /// 1 al 8
	var mensaje="";
	if (txtPiso>=0 && txtPiso<=42 && txtDpto>=1 && txtDpto<=8) {
		mensaje = "Llama a Piso " + txtPiso + " - Dpto " + txtDpto;
	} else {
		//mensaje = "Piso y/o Dpto erroneo";
		if (txtPiso>42 || txtPiso<0) {
			mensaje += "Piso " + txtPiso + " invalido ";
		}
		if (txtDpto>8 || txtDpto<1) {
			mensaje += "Dpto " + txtDpto + " invalido ";
		}
	}
	document.getElementById('mensaje').value = mensaje;
}

function borrar() {
	console.log("entro en la fn borrar");
	document.getElementById('piso').value = "";
	document.getElementById('dpto').value = "";
	document.getElementById('mensaje').value = "";
}

function mostrar(nro) {
	nro = ""+nro; // fix por las dudas, asi se maneja como string
	console.log("mostrar " + nro);
	var txtPiso = document.getElementById('piso').value;
	var txtDpto = document.getElementById('dpto').value;
	// busco los largos...
	var largoTxtPiso = txtPiso.length;
	var largoTxtDpto = txtDpto.length;
	var largoTotal = largoTxtPiso + largoTxtDpto;
	console.log("Largo Piso: " + largoTxtPiso);
	console.log("Largo Dpto: " + largoTxtDpto);

	switch (largoTotal) {
		case 0:  // es el 1er nro
			document.getElementById('piso').value = nro;
			break
		case 1: // es el 2do nro
			document.getElementById('piso').value += nro;
			break
		case 2: // es el 3er nro
			document.getElementById('dpto').value = nro;
			break
		default:
			// segui tocando y que no pase nada
	}
}