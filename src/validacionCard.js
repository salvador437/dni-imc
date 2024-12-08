// asignando en constantes los  elementos HTML.
const inputValidacion = document.querySelector(".input-validacion");
const btnValidacion = document.querySelector(".btn-cal-validacion");
const resultadoValidacion = document.querySelector("#resultado-validacion");
const posibleNumero = document.querySelector("#posible-numero");
// escuchando cuando se hace click  en el botón calcular
btnValidacion.addEventListener("click", calcularValidacion);

// escuchando cuando tiene el foco el input validación
inputValidacion.addEventListener("focus", () => {
  limpiar();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiar();
  }

  if(event.key === "Enter"){
    calcularValidacion()
  }

  if (event.ctrlKey && event.key === "z") {
    window.open("./index.html")
  }

});

function limpiar() {
  inputValidacion.value = "";
  document.querySelector("#resultado-validacion").textContent = "";
  document.querySelector("#posible-numero").textContent = "";
}
// cálculo de la validación del número de la card
function calcularValidacion() {
  const valorValidacion = inputValidacion.value;
  const validacion = ccTest(valorValidacion);

  if (valorValidacion.length < 16) {
    document.getElementById("resultado-validacion").style.color = "red";
    resultadoValidacion.textContent = "Tarjeta rechazada";
    window.open("./notificacionErrorValidacion.html", (target = "_self"));
    return;
  }

  if (validacion) {
    document.getElementById("resultado-validacion").style.color = "chartreuse";
    resultadoValidacion.textContent = "Tarjeta valida";
  } else {
    const valorValidacion = inputValidacion.value;
    document.getElementById("resultado-validacion").style.color = "red";
    resultadoValidacion.textContent = "Tarjeta rechazada";
    posibleNumero.textContent = `Pruebe éste ${ccGen(valorValidacion)}`;
  }
}

// commutación menú hanburguesa y navegador.
function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

function ccTest(cc){
	let sumaPar=0;
	let sumaImpar=0;
	for(let i =0;i<cc.length;i++){
		if(i%2==0){
			if(parseInt(cc.substring(i,i+1))*2 > 9)
				sumaImpar += parseInt(cc.substring(i,i+1))*2-9;
			else
				sumaImpar += parseInt(cc.substring(i,i+1))*2;
		}
		else
			sumaPar += parseInt(cc.substring(i,i+1));
	}
	let suma = sumaPar+sumaImpar;
	let MOD=suma%10;
	if(MOD==0)
		return true;
	else
		return false;
}


function ccGen(bin){
	let cc = "";
	let xInd=0;
	for(i=0;i<16;i++){
		if(bin.substring(i,i+1)=="x"){
			cc+=parseInt(Math.random(0,1)*9);
			xInd=i;
		}
		else {
			cc+=bin.substring(i,i+1);
		}
	}
	
	
	function ccGenX(bin,xInd){
		let cc="";
		for(let i=0;i<16;i++){
			if(i==xInd){
				if(bin.substring(i,i+1)==9)
					cc+=0;
				else
					cc+=(parseInt(bin.substring(i,i+1))+1);
			}
			else
				cc+=bin.substring(i,i+1);
		}
		return cc;
	}
	while(!ccTest(cc)){
		cc=ccGenX(cc,xInd);
	}
	return cc;
}

