const express = require("express");
const tituloRaiz = document.createElement("div");
tituloRaiz.innerText = "Bienvenidos";
const servidor = express();

const port = 8080;

const server = servidor.listen(port, () => {
  console.log(
    `Servidor http escuchando en el puerto ${server.address().port} `
  );
});
server.on("error", (error) => console.log(`Error en el servidor ${error}`));

servidor.get("/", (peticion, respuesta) => {
  respuesta.send();
});
