let http = require("http");

const numeros = require("./numeros")
const Logger = require('logplease');
const logger = Logger.create('utils');

array_numeros = [2, 3, 101, 201, 202, 100]

for (let index = 0; index < array_numeros.length; index++) {
    numeros.esPar(array_numeros[index]) ? logger.info(`El número ${array_numeros[index]} es par`) : logger.error(`El número ${array_numeros[index]} no es par`)
}

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);