import { pantallaCompleta } from "./funciones.js";
// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];


document.addEventListener("keydown", function (event) {
  
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
// Cuando el usuario hace clic en el historial <-- atras de navegación, se se vuelve a cargar la pagina para no salir de ella
closeBtn.onclick = function () {
  modal.style.display = "none";
  window.open("./index.html","_self","",true);
}


