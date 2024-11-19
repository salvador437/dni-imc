// asignando en constantes los  elementos HTML implicados.
const inputdni = document.querySelector(".input-dniNumero");
const inputConversor = document.querySelector(".input-conversor");
const btnCalcular = document.querySelector(".btn-calcular");
const btnCalTemp = document.querySelector(".btn-cal-temp");

// escuchando cuando se hace click en los botones.
btnCalcular.addEventListener("click", calcularLetraDNI);
btnCalTemp.addEventListener("click", calcularTemperaturaCF);

// escuchando cuando tiene el foco el input dni.
inputdni.addEventListener("focus", () => {
  inputdni.value = "";
  inputConversor.value = "";
  document.querySelector("#resultado").textContent = "";
});

// escuchando cuando  tiene el  input temperatura.
inputConversor.addEventListener("focus", () => {
  inputConversor.value = "";
  inputdni.value = "";
  document.querySelector("#resultado-temperatura").textContent = "";
});

// escuchando cuando el input pierde el foco
inputConversor.addEventListener("blur", () => {
  btnCalTemp.style.display = "inline-block";
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

// cálculo de la letra del DNI.
function calcularLetraDNI() {
  // Verificar que el DNI sea un número de 8 dígitos
  const dniNumero = document.querySelector(".input-dniNumero").value;
  inputdni.addEventListener("input", function (event) {
    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  });

  if (dniNumero.length !== 8 || isNaN(dniNumero)) {
    window.open("./notificacionError.html", (target = "_self"));
  }

  // Seleccionar la letra mediate el algorritmo aplicado.
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const indice = dniNumero % 23;
  const letraDNI = letras[indice];

  document.querySelector("#resultado").textContent = ` El DNI 
  completo es: ${dniNumero}${letraDNI} `;
}

//Cálculo de la conversión de grados C => F.
function calcularTemperaturaCF() {
  const gradosConversion = document.querySelector(".input-conversor").value;
  if (gradosConversion.length > 5 ||isNaN(gradosConversion) ||gradosConversion.length < 1) {
    window.open("./notificacionError.html", (target = "_self"));
  }

  let gradosFarhengeis = (9 / 5) * gradosConversion + 32;
  gradosFarhengeis = gradosFarhengeis.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  document.querySelector(
    "#resultado-temperatura"
  ).textContent = `${gradosConversion} grados C son ${gradosFarhengeis} F `;
}
