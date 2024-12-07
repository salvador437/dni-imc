// asignando en constantes los  elementos HTML.
const inputValidacion = document.querySelector(".input-validacion");
const btnCalValidacion = document.querySelector(".btn-cal-validacion");
const resultadoValidacion = document.querySelector("#resultado-validacion");

// escuchando cuando se hace click  en el botón calcular
btnCalValidacion.addEventListener("click", calcularValidacion);

// escuchando cuando tiene el foco el input validación
inputValidacion.addEventListener("focus", () => {
  inputValidacion.value = "";
  document.querySelector("#resultado-validacion").textContent = "";
});

// cálculo de la validación del número de la card
function calcularValidacion(numero){
  
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