
const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("./"));


app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "index.html"));
});

app.get("/dni-temp.html", (req, res) => {
  res.sendFile(path.join(__dirname + "dni-temp.html"));
});

app.get("/calculoIMC.html", (req, res) => {
  res.sendFile(path.join(__dirname + "calculoIMC.html"));
});

app.get("/link.html", (req, res) => {
  res.sendFile(path.join(__dirname + "link.html"));
});

app.get("/validacion.html", (req, res) => {
  res.sendFile(path.join(__dirname + "validacion.html"));
});

app.get("/formulario.html", (req, res) => {
  res.sendFile(path.join(__dirname + "formulario.html"));
});

app.get("/lista-tareas.html", (req, res) => {
  res.sendFile(path.join(__dirname + "lista-tareas.html"));
});

app.get("/readme.html", (req, res) => {
  res.sendFile(path.join(__dirname + "readme.html"));
});

// Middleware para manejar rutas no definidas (404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "error404.html"));
  
});


app.listen(0,function(){
  console.log(`puerto:http://localhost:${this.address().port}`) 
})