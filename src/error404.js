
import { salir } from "./funciones";

if (home) {
  home.addEventListener("click", salir);
}



document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "z" || event.ctrlKey && event.key === "Z") {
    window.open("./index.html","_self","",true);
  }
});