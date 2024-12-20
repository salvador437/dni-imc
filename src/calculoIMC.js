
// asignando en constantes los  elementos HTML.
const inputImcPeso = document.querySelector(".input-imcPeso");
const inputImcAltura = document.querySelector(".input-imcAltura");
const btnCalImc = document.querySelector(".btn-cal-imc");
const resultadoIMC = document.querySelector("#resultado-imc");
const menu = document.getElementById("navbarMenu");

function fullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    // metodo alternativo
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {               // metodos actuales
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

// escuchando cuando se hace click en el botón "btnCalImc".
btnCalImc.addEventListener("click", calcularIMC);

// escuchando cuando tiene el foco el "inputImcPeso".
inputImcPeso.addEventListener("focus", () => {
  inputImcPeso.value = "";
  resultadoIMC.textContent = "";
});

// escuchando cuando tiene el foco el inputImcAltura.
inputImcAltura.addEventListener("focus", () => {
  inputImcAltura.value = "";
  resultadoIMC.textContent = "";
});

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiar();
  }
  if (event.key === "Enter") {
    calcularIMC();
  }
  if (event.key === "p" || event.key === "P") {
    fullScreen();
  }
  if (
    (event.ctrlKey && event.key === "z") ||
    (event.ctrlKey && event.key === "Z")
  ) {
    window.open("./index.html", (target = "_self"));
  }
});

function limpiar() {
  inputImcPeso.value = "";
  inputImcAltura.value = "";
  resultadoIMC.textContent = "";
}

// commutación menú hanburguesa y navegador.
function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// calcula el índice de masa corporal IMC.
function calcularIMC() {
  // obteniendo los valores de los inputs peso y altura.
  const valorPeso = inputImcPeso.value;
  let valorAltura = inputImcAltura.value;

  if (valorPeso.length < 1 || isNaN(valorPeso)) {
    window.open("./notificacionErrorIMC.html", (target = "_self"));
  }

  if (valorAltura.length < 1 || isNaN(valorAltura)) {
    window.open("./notificacionErrorIMC.html", (target = "_self"));
  }
  // calculando el IMC
  valorAltura = valorAltura / 100;
  let valorResultado = valorPeso / valorAltura ** 2;
  // cambiando el punto por la coma en los decimales del resultado
  valorResultado = valorResultado.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  resultadoIMC.textContent = "El  IMC será de: " + valorResultado;
}
