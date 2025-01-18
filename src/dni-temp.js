import  {
  pantallaCompleta,
  limpiar,
  calcularLetraDNI,
  calcularTemperaturaCF,
  toggleMenu,inputdni,inputConversor,
  btnCalcular,btnCalTemp
}  from "./funciones.js";


// asignando en constantes los  elementos HTML implicados.
const menu = document.querySelector(".menu-icon")

menu.addEventListener("click",toggleMenu)

// escuchando cuando se hace click en los botones.
btnCalcular.addEventListener("click", calcularLetraDNI);
btnCalTemp.addEventListener("click", calcularTemperaturaCF);

// escuchando cuando tiene el foco el input dni.
inputdni.addEventListener("focus", () => {
  limpiar();
});

// escuchando cuando  tiene el  input temperatura.
inputConversor.addEventListener("focus", () => {
  limpiar();
});

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiar();
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
    window.open("./index.html", "_self", "", true);
  }
});

// escuchando cuando el input pierde el foco
inputConversor.addEventListener("blur", () => {
  btnCalTemp.style.display = "inline-block";
});







