// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close3")[0];

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    window.open("./validacion.html", (target = "_self"));
  }
});
// Cuando el usuario hace clic en el historial <-- atras de navegación, se se vuelve a cargar la pagina para no salir de ella
closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./validacion.html", (target = "_self"));
};
