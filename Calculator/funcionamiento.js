var n;
var n1;
var n2;
var signo;
​
​
​
​
​
​
function ver (n){
​
	console.log(" ver " + n);
	document.getElementById('display').value += n ;
​
​
        if (signo == ("+") || signo == ("-") ||signo == ("*") ||signo == ("/") ) {
        	
        	n2 = document.getElementById('display').value;
            console.log(" ver n2 " + n2);
        }
}
​
​
function simbolo(s) {
        n1 = document.getElementById('display').value;
        console.log(" ver n1 " + n1);
        document.getElementById('display').value = "";
        signo = s;
        console.log(" ver signo " + signo);
​
}
​
​
function borrar() {
        console.log("Borrando...");
        document.getElementById('display').value = "";
        signo = 0;        
}
​
​
function igual (){
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	console.log("signo "+signo);
	resultado = 0;
​
  if (signo == "+") {
  	resultado = n1 + n2;
  	console.log("ver+ " + resultado);
​
  		
  } 
​
  if (signo == "-") {
  	resultado = n1 - n2;
  	console.log("ver- " + resultado);
  	
  }
​
  if (signo == "*") {
  	resultado = n1 * n2;
  	console.log("ver* " + resultado);
  	
  }	
​
  if (signo == "/" ) {
  	resultado = n1 / n2;
  	console.log("ver/ " + resultado);
  }	
  document.getElementById('display').value = resultado;
}






