// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];


document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    window.open("./index.html", (target = "_self"));
  }
  if(event.key === "Enter"){
    toggleFullScreen()
  }
});
// Cuando el usuario hace clic en el historial <-- atras de navegación, se se vuelve a cargar la pagina para no salir de ella
closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./index.html", (target = "_self"));
};

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
