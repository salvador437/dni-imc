const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./"));

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
});

app.get("/calculoIMC.html", (req, res)=> {
  res.sendFile(__dirname + "calculoIMC.html");
});

app.get("/link.html", (req, res) => {
  res.sendFile(__dirname + "link.html");
});

app.get("/validacion.html", (req, res) => {
  res.sendFile(__dirname + "validacion.html");
});

app.get("/formulario.html", (req, res) => {
  res.sendFile(__dirname + "formulario.html");
});

app.use((req, res) => {
  console.log("error")
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`escuchando por el puerto ${PUERTO}`);
});

