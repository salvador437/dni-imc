import {
  pantallaCompleta,
  closeBtn,
  inputNombre,
  inputApellidos,
  inputMail,
  inputTelefono,
  inputCiudad,
  inputPais,
  inputMensaje,toggleMenu
} from "./funciones.js";

const menu = document.querySelector(".menu-icon");

menu.addEventListener("click",toggleMenu);

document.addEventListener("submit",()=> {
  alert("El formulario se enviará en unos segundos ");
})

inputNombre.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputNombre.value = "";
  }
});

inputApellidos.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputApellidos.value = "";
  }
});

inputMail.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputMail.value = "";
  }
});

inputTelefono.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputTelefono.value = "";
  }
});

inputCiudad.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputCiudad.value = "";
  }
});


inputPais.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputPais.value = "";
  }
});

inputMensaje.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    inputMensaje.value = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    window.open("./index.html", "_self", "", true);
  }
  if (event.altKey && event.key === "b") {
    inputNombre.value = "";
    inputApellidos.value = "";
    inputMail.value = "";
    inputTelefono.value = "";
    inputCiudad.value = "";
    inputPais.value = "";
    inputMensaje.value = "";
  }

  if (
    (event.altKey && event.key === "p") ||
    (event.altKey && event.key === "P")
  ) {
    pantallaCompleta();
  }

  if (
    (event.ctrlKey && event.key === "z") ||
    (event.ctrlKey && event.key === "Z")
  ) {
    window.open("./index.html", "_self", "", true);
  }
});

closeBtn.onclick = () => {
  window.open("./index.html", "_self", "", true);
};
