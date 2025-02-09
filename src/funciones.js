//captura elementos de la página index.html
const inputdni = document.querySelector(".input-dniNumero");
const inputConversor = document.querySelector(".input-conversor");
const btnCalcular = document.querySelector(".btn-calcular");
const btnCalTemp = document.querySelector(".btn-cal-temp");
const resultadoDni = document.querySelector("#resultado");
const resultadoTemp = document.querySelector("#resultado-temperatura");
const flechaSubir = document.querySelector(".flecha");

//captura elementos de la página calculoIMC.html
const inputImcPeso = document.querySelector(".input-imcPeso");
const inputImcAltura = document.querySelector(".input-imcAltura");
const btnCalImc = document.querySelector(".btn-cal-imc");
const resultadoIMC = document.querySelector("#resultado-imc");

//captura elementos de la página validacion.html
const inputValidacion = document.querySelector(".input-validacion");
const btnValidacion = document.querySelector(".btn-cal-validacion");
const resultadoValidacion = document.querySelector("#resultado-validacion");
const posibleNumero = document.querySelector("#posible-numero");

//captura elementos de la página formulario.html
const closeBtn = document.getElementsByClassName("close4")[0];
const inputNombre = document.querySelector("#nombre");
const inputApellidos = document.querySelector("#apellidos");
const inputMail = document.querySelector("#mail");
const inputTelefono = document.querySelector("#telefono");
const inputCiudad = document.querySelector("#ciudad");
const inputPais = document.querySelector("#pais");
const inputMensaje = document.querySelector("#msg");

//captura elementos de la página lista-tareas.html
const input = document.getElementById('ingresar-tarea');
const close = document.querySelector('.close5');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

const menu = document.querySelector(".menu");
const menu2 = document.querySelector(".menu-lateral");


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
  
  valorAltura = valorAltura / 100;
  let valorResultado = valorPeso / valorAltura ** 2;
  
  valorResultado = valorResultado.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  resultadoIMC.textContent = "El  IMC será de: " + valorResultado;
}


// cálculo de la letra del DNI. 
function calcularLetraDNI() {
  const dniNumero = inputdni.value;
  inputdni.addEventListener("input", function (event) {
    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  });
  
  if (dniNumero.length !== 8 || isNaN(dniNumero)) {
    window.open("./notificacionError.html","_self","",true);
  }
  
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const indice = dniNumero % 23;
  const letraDNI = letras[indice];
  resultadoDni.textContent = ` El DNI completo es: ${dniNumero}-${letraDNI} `;
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


// cálculo de la validación del número BIN de la card
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

// genéra un número BIN de tarjeta válido
function ccGen(bin) {
  let cc = "";
  let xInd = 0;

  for (let i = 0; i < 16; i++) {
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

//limpia elementos de los inputs y resultados de index.html.
function limpiar() {
  inputdni.value = "";
  inputConversor.value = "";
  resultadoDni.textContent = "";
  resultadoTemp.textContent = "";
}

//limpia elementos de los inputs y resultados de calculoIMC.html.
function limpiarCalculoIMC() {
  inputImcPeso.value = "";
  inputImcAltura.value = "";
  resultadoIMC.textContent = "";
}

//limpia elementos de los inputs y resultados de validacion.html.
function limpiarValidacion() {
  inputValidacion.value = "";
  resultadoValidacion.textContent = "";
  posibleNumero.textContent = ""; 
}

// activa la pantalla a fullscreen o normal
function pantallaCompleta() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {              
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

function salir() {
  window.location.href = "./index.html";
}

// commutación menú hanburguesa y navegador.
function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
  console.log(menu.className)
}

// commutación menú hanburguesa y navegador.
function toggleMenu2() {
  if (menu2.className === "menu-lateral") {
    menu2.className += " responsive";
  } else {
    menu2.className = "menu-lateral";
  }
}

function subirTodo(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
}

function handleScroll() {
  if (window.scrollY > 600) {
    flechaSubir.classList.add("flecha");
  } else {
    flechaSubir.classList.remove("flecha");
  }
}

function agregarTarea() {
  if (input.value) {
    
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
  
    
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);
  
    
    let iconos = document.createElement('div');
    iconos.classList.add('iconos'); 
    tareaNueva.appendChild(iconos);
  
    
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);
  
    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);
  
    iconos.append(completar, eliminar);
  
    
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert('Tarea vacia.');
  }
}


function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}


function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

// exportación de funciones
export {
  pantallaCompleta,limpiar,calcularLetraDNI,
  calcularTemperaturaCF,toggleMenu,toggleMenu2,
  limpiarCalculoIMC,agregarTarea,calcularIMC,
  calcularValidacion,limpiarValidacion,salir,ccGen,
  ccTest,inputValidacion,btnValidacion,inputImcPeso,handleScroll,
  inputImcAltura,btnCalImc,resultadoIMC,inputdni,flechaSubir,
  inputConversor,btnCalTemp,btnCalcular,closeBtn,inputNombre,
  inputApellidos,inputMail,inputTelefono,inputCiudad,
  inputPais,inputMensaje,menu,input,close,boton,menu2,subirTodo
}
