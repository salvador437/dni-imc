import { pantallaCompleta } from "./funciones.js";
// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

//capturando pulsación de teclas
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

closeBtn.onclick = function () {
  modal.style.display = "none";
  window.open("./dni-temp.html","_self","",true);
}


