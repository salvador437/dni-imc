const closeBtn = document.getElementsByClassName("close4")[0];
const inputNombre = document.querySelector("#nombre");
const inputApellidos = document.querySelector("#apellidos");
const inputMail = document.querySelector("#mail");
const inputTelefono = document.querySelector("#telefono");
const inputCiudad = document.querySelector("#ciudad");
const inputPais = document.querySelector("#pais");
const inputMensaje = document.querySelector("#msg");

inputNombre.addEventListener("keydown", function (event) {
if(event.key ==="Escape"){
    inputNombre.value = "";
  }
});

inputApellidos.addEventListener("keydown", function (event) {
  if(event.key ==="Escape"){
      inputApellidos.value = "";
    }
  });

inputMail.addEventListener("keydown", function (event) {
  if(event.key ==="Escape"){
    inputMail.value = "";
  }
});

inputTelefono.addEventListener("keydown", function (event) {
  if(event.key ==="Escape"){
      inputTelefono.value = "";
    }
  });

  inputCiudad.addEventListener("keydown", function (event) {
    if(event.key ==="Escape"){
        inputCiudad.value = "";
      }
    });

    inputPais.addEventListener("keydown", function (event) {
      if(event.key ==="Escape"){
          inputPais.value = "";
        }
      });

      inputMensaje.addEventListener("keydown", function (event) {
        if(event.key ==="Escape"){
            inputMensaje.value = "";
          }
        });

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "z") {
    window.open("./index.html", (target = "_self"));
  }
  if (event.altKey &&  event.key === "b") {
    inputNombre.value = "";
    inputApellidos.value = "";
    inputMail.value = "";
    inputTelefono.value = "";
    inputCiudad.value = "";
    inputPais.value = "";
    inputMensaje.value = "";
  }
});

closeBtn.onclick = ()=> {
  open("./index.html", (target = "_self"));
};
