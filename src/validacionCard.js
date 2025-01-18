import  { 
  pantallaCompleta,
  calcularValidacion,
  limpiarValidacion,
  toggleMenu,
  inputValidacion,
  btnValidacion 
}  from "./funciones.js";

//capturando elementos del DOM en constantes
const menu = document.querySelector(".menu-icon")

menu.addEventListener("click",toggleMenu)

// escuchando cuando se hace click  en el botón calcular
btnValidacion.addEventListener("click", calcularValidacion);

// escuchando cuando tiene el foco el input validación
inputValidacion.addEventListener("focus", () => {
  limpiarValidacion();
});

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiarValidacion();
  }

  if (event.key === "Enter") {
    calcularValidacion()
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



