const { Long } = require("mongodb")
const { Model } = require("mongoose")

var datos= []

var ModelUsuarios={}

ModelUsuarios.Guardar = function(post, callback){

    datos.push({
        name: post.nombre,
        cedula: post.cedula,
        edad: post.edad,
        telefono: post.telefono,
        estadoCivil: post.estadoCivil
    })

    return callback({
        state: true,
        mensaje: "Usuario guardado"
    })
}

ModelUsuarios.ListarUsuarios = function(post, callback){
    return callback (
        {
            state: true,
            datos: datos
        }
    )
} 

ModelUsuarios.ActualizarPorCedula = function(post, callback){

    datos[post.posicion].edad = post.edad
    return callback(
        {
            state: true,
            mensaje: "Se actualizo correctamente",
        }
    ) 
}

ModelUsuarios.BorrarPorCedula = function(posicion, callback){
    datos.splice(posicion, 1)
    return callback({
        state: true,
        mensaje: "Se elimino correctamente"
    })
}

module.exports.usuarios = ModelUsuarios