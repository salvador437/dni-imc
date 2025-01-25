import  { pantallaCompleta, toggleMenu2, subirTodo }  from "./funciones.js";

const menu2 = document.querySelector(".menu-icon");
const subir = document.querySelector(".subir");

menu2.addEventListener("click",toggleMenu2);
subir.addEventListener("click", subirTodo);

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  
  if ( (event.altKey &&  event.key === "p" ) ||
        (event.altKey &&  event.key === "P"
  ) ) {
    pantallaCompleta();
  }

});