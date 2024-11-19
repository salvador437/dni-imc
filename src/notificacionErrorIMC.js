// Obtener elementos del DOM
const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close2")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./pagina2.html", target="_self");
};