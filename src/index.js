import  { pantallaCompleta, 
  toggleMenu2, subirTodo,
  flechaSubir,handleScroll 
}  from "./funciones.js";

const menu2 = document.querySelector(".menu-icon");
const subir = document.querySelector(".subir");

flechaSubir.classList.remove("flecha");

menu2.addEventListener("click",toggleMenu2);
subir.addEventListener("click", subirTodo);
flechaSubir.addEventListener("click", subirTodo);


window.addEventListener("scroll", handleScroll);
// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  
  if ( (event.altKey &&  event.key === "p" ) ||
        (event.altKey &&  event.key === "P"
  ) ) {
    pantallaCompleta();
  }

});