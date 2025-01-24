import  {
  agregarTarea, input,
  close, boton, pantallaCompleta
}  from "./funciones.js";


boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    agregarTarea();
  }

  if(e.key == "Escape"){
    input.value = "";
  } 

  
});

document.addEventListener("keydown", function (event) {
  
  if ( (event.altKey &&  event.key === "p" ) ||
        (event.altKey &&  event.key === "P"
  ) ) {
    pantallaCompleta();
  }

  if (
    (event.ctrlKey && event.key === "z") ||
    (event.ctrlKey && event.key === "Z")
  ) {
    window.open("./index.html","_self","",true);
  }

});


close.addEventListener('click', () => {
  window.open("./index.html","_self","",true);
})

// escuchando cuando tiene el foco el "input-lista-tareas".
input.addEventListener("focus", () => {
  input.value = "";
});





