const express = require('express')

const server = express()

server.listen(3000, () => console.log("RODANDO"))

// arrow function ( () =>) é uma forma de função simplificada - foi nomeada de RODANDO
//console.log rodava no console do navegador - no caso, vai rodar no terminal