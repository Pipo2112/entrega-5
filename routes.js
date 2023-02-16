var express = require('express')
var app = express()
var usuariosController= require('./controllers/usuariosController').usuarios
//crear 
app.post("/usuarios/Guardar", function (req, response) {
    usuariosController.Guardar(req,response)
})
// leer
app.post("/usuarios/ListarUsuarios", function (res, response) {
    usuariosController.ListarUsuarios(req,response)
})
//actualizar
app.post("/usuarios/ActualizarPorCedula", function (req, response) {

    usuariosController.ActualizarPorCedula(req,response)
})
//borrar
app.post("/usuarios/BorrarPorCedula", function (req, response) {

    usuariosController.BorrarPorCedula(req,response)
})

