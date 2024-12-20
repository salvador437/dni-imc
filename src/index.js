const {fullScreen} = require("../src/fullscreen.");
// asignando en constantes los  elementos HTML implicados.
const inputdni = document.querySelector(".input-dniNumero");
const inputConversor = document.querySelector(".input-conversor");
const btnCalcular = document.querySelector(".btn-calcular");
const btnCalTemp = document.querySelector(".btn-cal-temp");
const resultadoDni = document.querySelector("#resultado");
const resultadoTemp = document.querySelector("#resultado-temperatura")
const menu = document.getElementById("navbarMenu");


// escuchando cuando se hace click en los botones.
btnCalcular.addEventListener("click", calcularLetraDNI);
btnCalTemp.addEventListener("click", calcularTemperaturaCF);

// escuchando cuando tiene el foco el input dni.
inputdni.addEventListener("focus", () => {
  limpiar();
});

// escuchando cuando  tiene el  input temperatura.
inputConversor.addEventListener("focus", () => {
  limpiar();
});

/// escuchando cuando se pulsa una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    limpiar();
  }

  if (event.key === "p" || event.key === "P") {
    fullScreen()
  }
  
  if (event.altlKey && event.key === "z"|| event.ctrlKey && event.key === "Z") {
    window.open("./index.html", (target = "_self"));
  }
});

function limpiar() {
  inputdni.value = "";
  inputConversor.value = "";
  resultadoDni.textContent = "";
  inputConversor.value = "";
  inputdni.value = "";
  resultadoTemp.textContent = "";
}

// escuchando cuando el input pierde el foco
inputConversor.addEventListener("blur", () => {
  btnCalTemp.style.display = "inline-block";
});
// commutación menú hanburguesa y navegador.
function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// cálculo de la letra del DNI.
function calcularLetraDNI() {
  const dniNumero = inputdni.value;
  inputdni.addEventListener("input", function (event) {
    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  });
  // Verificar que el DNI sea un número de 8 dígitos
  if (dniNumero.length !== 8 || isNaN(dniNumero)) {
    window.open("./notificacionError.html", (target = "_self"));
  }
  // Seleccionar la letra mediate el algorritmo aplicado.
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const indice = dniNumero % 23;
  const letraDNI = letras[indice];
  resultadoDni.textContent = ` El DNI 
  completo es: ${dniNumero}-${letraDNI} `;
}

//Cálculo de la conversión de grados C => F.
function calcularTemperaturaCF() {
  const gradosConversion = inputConversor.value;
  if (
    gradosConversion.length > 5 ||
    isNaN(gradosConversion) ||
    gradosConversion.length < 1
  ) {
    window.open("./notificacionError.html", (target = "_self"));
  }

  let gradosFarhengeis = (9 / 5) * gradosConversion + 32;
  gradosFarhengeis = gradosFarhengeis.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  resultadoTemp.textContent = `${gradosConversion} grados C son ${gradosFarhengeis} F `;
}