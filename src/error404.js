import { salir } from "./funciones";

home.addEventListener("click",salir)
// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey && event.key === "z") ||
    (event.ctrlKey && event.key === "Z")
  ) {
    salir()
  }
});
