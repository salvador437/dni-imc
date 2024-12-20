
// asignando en constantes los  elementos HTML.
const inputValidacion = document.querySelector(".input-validacion");
const btnValidacion = document.querySelector(".btn-cal-validacion");
const resultadoValidacion = document.querySelector("#resultado-validacion");
const posibleNumero = document.querySelector("#posible-numero");

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


// escuchando cuando se hace click  en el botón calcular
btnValidacion.addEventListener("click", calcularValidacion);

// escuchando cuando tiene el foco el input validación
inputValidacion.addEventListener("focus", () => {
  limpiar();
});

// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiar();
  }

  if (event.key === "Enter") {
    calcularValidacion();
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
  inputValidacion.value = "";
  resultadoValidacion.textContent = "";
  posibleNumero.textContent = "";
}

// cálculo de la validación del número de la card
function calcularValidacion() {
  const valorValidacion = inputValidacion.value;
  const validacion = ccTest(valorValidacion);

  if (valorValidacion.length < 16) {
    resultadoValidacion.style.color = "red";
    resultadoValidacion.textContent = "Tarjeta rechazada.";
    window.open("./notificacionErrorValidacion.html", (target = "_self"));
  }

  if (validacion) {
    resultadoValidacion.style.color = "chartreuse";
    resultadoValidacion.textContent = "Tarjeta válida.";
  } else {
    const valorValidacion = inputValidacion.value;
    resultadoValidacion.style.color = "red";
    resultadoValidacion.textContent = "Tarjeta rechazada";
    posibleNumero.textContent = `Pruebe éste ${ccGen(valorValidacion)}`;
  }
}

// commutación menú hanburguesa y navegador.
function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// cálculo de la validación del número de la card
function ccTest(cc) {
  let sumaPar = 0;
  let sumaImpar = 0;
  for (let i = 0; i < cc.length; i++) {
    if (i % 2 == 0) {
      if (parseInt(cc.substring(i, i + 1)) * 2 > 9)
        sumaImpar += parseInt(cc.substring(i, i + 1)) * 2 - 9;
      else sumaImpar += parseInt(cc.substring(i, i + 1)) * 2;
    } else sumaPar += parseInt(cc.substring(i, i + 1));
  }
  let suma = sumaPar + sumaImpar;
  let MOD = suma % 10;
  if (MOD == 0) return true;
  else return false;
}

function ccGen(bin) {
  let cc = "";
  let xInd = 0;
  for (i = 0; i < 16; i++) {
    if (bin.substring(i, i + 1) == "x") {
      cc += parseInt(Math.random(0, 1) * 9);
      xInd = i;
    } else {
      cc += bin.substring(i, i + 1);
    }
  }

  function ccGenX(bin, xInd) {
    let cc = "";
    for (let i = 0; i < 16; i++) {
      if (i == xInd) {
        if (bin.substring(i, i + 1) == 9) cc += 0;
        else cc += parseInt(bin.substring(i, i + 1)) + 1;
      } else cc += bin.substring(i, i + 1);
    }
    return cc;
  }
  while (!ccTest(cc)) {
    cc = ccGenX(cc, xInd);
  }
  return cc;
}
