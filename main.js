const http = require("http");
const localtime = 2100;
function controlador(peticion, respuesta) {
  console.log(peticion);
  //   respuesta.send("todo ok");
  if (localtime >= 0600 && localtime <= 1299) {
    respuesta.end("Buen dia");
  } else if (localtime >= 1300 && localtime <= 1900) {
    respuesta.end("Buenas tardes");
  } else {
    respuesta.end("Buenas noches");
  }
}
const server = http.createServer(controlador);
server.listen(8080, (err, result) => {
  if (err) {
    console.log("Algo fallo" + err);
  } else {
    console.log("Se conecto al puerto 8080");
  }
});
