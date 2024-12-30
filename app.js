const express = require("express");
  app = express();
  path = require("path");
  PUERTO = 3000;
  
app.use(express.static("./"));

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "index.html"));
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

app.get("/readme.html", (req, res) => {
  res.sendFile(path.join(__dirname + "readme.html"));
});

// Middleware para manejar rutas no definidas (404)
app.use((req, res) => {
  console.log(error);
  res.status(404).sendFile(path.join(__dirname, "error404.html"));
});



app.listen(PUERTO, () => {
  console.log(`escuchando por el puerto ${PUERTO}`);
});
