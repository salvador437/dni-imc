const closeBtn = document.getElementsByClassName("close4")[0];
const inputNombre = document.querySelector("#nombre"); 
const inputMail = document.querySelector("#mail")

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    window.open("./index.html", (target = "_self"));
  }
  if (event.key === "Escape") {
    inputMail.value=""
  }
  
});

closeBtn.onclick = function () {
  open("./index.html", (target = "_self"));
};
