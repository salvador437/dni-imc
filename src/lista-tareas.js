import  {
  agregarTarea,input,
  close,boton,
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

close.addEventListener('click', () => {
  window.open("./index.html","_self","",true);
})

// escuchando cuando tiene el foco el "input-lista-tareas".
input.addEventListener("focus", () => {
  input.value = "";
});





