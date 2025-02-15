import { 
  pantallaCompleta,
  limpiarCalculoIMC,ejecutar, 
  calcularIMC,toggleMenu,
  inputImcPeso,inputImcAltura,
  btnCalImc,resultadoIMC 
}  from "./funciones.js";


const menu = document.querySelector(".menu-icon");

menu.addEventListener("click",toggleMenu);

// escuchando cuando se hace click en el botón "btnCalImc".
btnCalImc.addEventListener("click", calcularIMC);

// escuchando cuando tiene el foco el "inputImcPeso".
inputImcPeso.addEventListener("focus", () => {
  inputImcPeso.value = "";
  resultadoIMC.textContent = "";
});

// escuchando cuando tiene el foco el inputImcAltura.
inputImcAltura.addEventListener("focus", () => {
  inputImcAltura.value = "";
  resultadoIMC.textContent = "";
});

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiarCalculoIMC();
    
  }
  if (event.key === "Enter") {
    calcularIMC();
  }
  if ( (event.altKey &&  event.key === "p" ) ||
        (event.altKey &&  event.key === "P"
  ) ) {
    pantallaCompleta();
    
  }
  if (
    (event.ctrlKey && event.key === "z") ||
    (event.ctrlKey && event.key === "Z")
  ) {
    
    window.open("./index.html","_self","",true);
  }
});

ejecutar("calc.exe")



