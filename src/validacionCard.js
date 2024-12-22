import  { pantallaCompleta,calcularValidacion,limpiarValidacion }  from "./funciones.js";

const inputValidacion = document.querySelector(".input-validacion");
const btnValidacion = document.querySelector(".btn-cal-validacion");


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



