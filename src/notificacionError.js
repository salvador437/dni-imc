// Obtener elementos del DOM
const modal = document.getElementById("myModal");

const closeBtn = document.getElementsByClassName("close")[0];


// Cuando el usuario hace clic en el historial atras de navegación, se se vuelve a cargar la pagina para no salir de ella
closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./index.html", target="_self"   );
};


