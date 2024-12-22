import  { 
  pantallaCompleta,
  limpiarCalculoIMC, 
  calcularIMC, 
}  from "./funciones.js";

const inputImcPeso = document.querySelector(".input-imcPeso");
const inputImcAltura = document.querySelector(".input-imcAltura");
const btnCalImc = document.querySelector(".btn-cal-imc");
const resultadoIMC = document.querySelector("#resultado-imc");




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





