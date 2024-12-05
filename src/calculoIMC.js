// asignando en constantes los  elementos HTML.
const inputImcPeso = document.querySelector(".input-imcPeso");
const inputImcAltura = document.querySelector(".input-imcAltura");
const btnCalImc = document.querySelector(".btn-cal-imc");
const resultadoIMC = document.querySelector("#resultado-imc");

// escuchando cuando se hace click en el botón "btnCalImc".
btnCalImc.addEventListener("click", calcularIMC);

// escuchando cuando tiene el foco el "inputImcPeso".
inputImcPeso.addEventListener("focus", () => {
  inputImcPeso.value = "";
  document.querySelector("#resultado-imc").textContent = "";
});

// escuchando cuando tiene el foco el inputImcAltura.
inputImcAltura.addEventListener("focus", () => {
  inputImcAltura.value = "";
  document.querySelector("#resultado-imc").textContent = "";
});

// commutación menú hanburguesa y navegador.
function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// calcula el indice de masa corporal IMC
function calcularIMC() {
  // valores de los inputs peso y altura.
  const valorPeso = document.querySelector(".input-imcPeso").value;
  let valorAltura = document.querySelector(".input-imcAltura").value;

  if (valorPeso.length < 1 || isNaN(valorPeso)) {
    window.open("./notificacionErrorIMC.html", (target = "_self"));
  }

  if (valorAltura.length < 1 || isNaN(valorAltura)) {
    window.open("./notificacionErrorIMC.html", (target = "_self"));
  }

  valorAltura = valorAltura / 100;
  let valorResultado = valorPeso / valorAltura ** 2;
  // cambiando el punto por la coma en los decimales del resultado
  valorResultado = valorResultado.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  resultadoIMC.textContent = "El  IMC será de: " + valorResultado;
}
