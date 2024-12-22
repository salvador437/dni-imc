
const inputdni = document.querySelector(".input-dniNumero");
const inputConversor = document.querySelector(".input-conversor");
const inputImcPeso = document.querySelector(".input-imcPeso");
const inputImcAltura = document.querySelector(".input-imcAltura");
const inputValidacion = document.querySelector(".input-validacion");
const resultadoDni = document.querySelector("#resultado");
const resultadoTemp = document.querySelector("#resultado-temperatura");
const resultadoIMC = document.querySelector("#resultado-imc");
const resultadoValidacion = document.querySelector("#resultado-validacion");
const home = document.querySelector("#salir");

function pantallaCompleta() {
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

function limpiar() {

  inputdni.value = "";
  inputConversor.value = "";
  resultadoDni.textContent = "";
  inputConversor.value = "";
  inputdni.value = "";
  resultadoTemp.textContent = "";
}

function limpiarCalculoIMC() {
  inputImcPeso.value = "";
  inputImcAltura.value = "";
  resultadoIMC.textContent = "";
}

function limpiarValidacion() {
  inputValidacion.value = "";
  resultadoValidacion.textContent = "";
  posibleNumero.textContent = "";
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
    window.open("./notificacionError.html","_self","",true);
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
    window.open("./notificacionError.html","_self","",true);
  }

  let gradosFarhengeis = (9 / 5) * gradosConversion + 32;
  gradosFarhengeis = gradosFarhengeis.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  resultadoTemp.textContent = `${gradosConversion} grados C son ${gradosFarhengeis} F `;
}

// calcula el índice de masa corporal IMC.
function calcularIMC() {
  // obteniendo los valores de los inputs peso y altura.
  const valorPeso = inputImcPeso.value;
  let valorAltura = inputImcAltura.value;

  if (valorPeso.length < 1 || isNaN(valorPeso)) {
    window.open("./notificacionErrorIMC.html","_self","",true);
  }

  if (valorAltura.length < 1 || isNaN(valorAltura)) {
    window.open("./notificacionErrorIMC.html","_self","",true);
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



// commutación menú hanburguesa y navegador.
function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// cálculo de la validación del número de la card
function calcularValidacion() {
  const valorValidacion = inputValidacion.value;
  const validacion = ccTest(valorValidacion);

  if (valorValidacion.length < 16) {
    resultadoValidacion.style.color = "red";
    resultadoValidacion.textContent = "Tarjeta rechazada.";
    window.open("./notificacionErrorValidacion.html","_self","",true);
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

function salir() {
  window.location.href = "./index.html";
}


export {pantallaCompleta,
  limpiar,calcularLetraDNI,
  calcularTemperaturaCF,
  toggleMenu,limpiarCalculoIMC,
  calcularIMC,calcularValidacion,
  limpiarValidacion,salir
}
