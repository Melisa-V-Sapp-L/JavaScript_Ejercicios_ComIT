var op1, operador;

function mostrar(n) {
	document.getElementById("visor").value += n;
}


function signo(s) {
	console.log("entro en fnSigno: " + s);
	// el valor del visor se guarda en una variable
	op1 = document.getElementById("visor").value;

	// guardar el signo
	operador = s;

	// borrar el display
	document.getElementById("visor").value = "";
}

function resultado() {
	console.log("entro en resultado ");
	console.log("El op1 es: " + op1);
	console.log("El signo es: " + operador);
	r = 0;
	// el valor del display es el operador 2
	var op2 = document.getElementById("visor").value;

	op1=parseInt(op1);
	op2=parseInt(op2);
	
	// hacer la operacion DEPENDIENDO de operador
	switch(operador) {
		case "+": r=op1+op2; break
		case "-": r=op1-op2; break
		case "*": r=op1*op2; break
		case "/": r=op1/op2; break
		default:
			// laralalalarlalrar
	}
	// muestro el resultado en el display
	document.getElementById("visor").value = r;
}


function resultadoEval() {
	document.getElementById("visor").value = eval(document.getElementById("visor").value);
}