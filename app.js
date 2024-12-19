const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "calculoIMC.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "link.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "validacion.html");
});

app.use((req, res) => {
  res.status(404).send("página no encontrada");
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`escuchando por el puerto ${PUERTO}`);
});
