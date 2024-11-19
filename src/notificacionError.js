// Obtener elementos del DOM
const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];


// Cuando el usuario hace clic en la 'x', se cierra el modal
closeBtn.onclick = function () {
  modal.style.display = "none";
  open("./index.html", target="_self"   );
};


