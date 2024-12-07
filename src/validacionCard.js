// asignando en constantes los  elementos HTML.
const inputValidacion = document.querySelector(".input-validacion");
const btnValidacion = document.querySelector(".btn-cal-validacion");
const resultadoValidacion = document.querySelector("#resultado-validacion");

// escuchando cuando se hace click  en el botón calcular
btnValidacion.addEventListener("click", calcularValidacion);

// escuchando cuando tiene el foco el input validación
inputValidacion.addEventListener("focus", () => {
  inputValidacion.value = "";
  document.querySelector("#resultado-validacion").textContent = "";
});

// cálculo de la validación del número de la card
function calcularValidacion(){
  
  const valorValidacion = inputValidacion.value;
  const validacion = ccTest(valorValidacion);

  if(valorValidacion.length < 16){
    document.getElementById("resultado-validacion").style.color = "red"
    resultadoValidacion.textContent = "Tarjeta rechazada"
    window.open("./notificacionErrorValidacion.html", (target = "_self"));
    return
  }

  if (validacion){
    console.log("tarjeta valida")
    document.getElementById("resultado-validacion").style.color = "chartreuse"
    resultadoValidacion.textContent = "Tarjeta valida"
  }else{
    console.log("tarjeta rechazada")
    document.getElementById("resultado-validacion").style.color = "red"
    resultadoValidacion.textContent = "Tarjeta rechazada"
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





