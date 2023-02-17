var ModelUsuarios = require('../models/modelUsuarios').usuarios
const usuariosController = {
}


// usuariosController.Guardar = function (req, response)
app.post("/usuarios/Guardar", function (req, response)
{

    var post =
    {
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        edad: req.body.edad,
        telefono: req.body.telefono,
        estadoCivil: req.body.estadoCivil

    }

    // validacion de nombre
    if (post.nombre == "".trim() || post.nombre == null || post.nombre === undefined) {
        response.json({
            state: false,
            mensaje: "el campo nombre es obligatorio"
        })
        return false
    }

    if (post.nombre.length < 3) {
        response.json({
            state: false,
            mensaje: "el campo nombre debe contener minimo 3 caracteres"
        })
    }

    if (post.nombre.length > 20) {
        response.json({
            state: false,
            mensaje: "el campo nombre debe ser menos a 20 caracteres"
        })
    }

    //validacion de edad

    if (post.edad == "".trim() || post.edad == null || post.edad === undefined) {
        response.json({
            state: false,
            mensaje: "el campo edad es obligatorio"
        })
        return false
    }

    if (post.edad.length < 1) {
        response.json({
            state: false,
            mensaje: "el campo edad debe contener minimo 1 caracteres"
        })
    }

    if (post.edad.length > 3) {
        response.json({
            state: false,
            mensaje: "el campo edad debe ser menos a 3 caracteres"
        })
    }

    // validacion cedula

    if (post.cedula == "".trim() || post.cedula == null || post.cedula === undefined) {
        response.json({
            state: false,
            mensaje: "el campo cedula es obligatorio"
        })
        return false
    }

    if (post.cedula.length < 1) {
        response.json({
            state: false,
            mensaje: "el campo cedula debe contener minimo 1 caracteres"
        })
    }

    if (post.cedula.length > 10) {
        response.json({
            state: false,
            mensaje: "el campo cedula debe ser menos a 10 caracteres"
        })
    }

    //validacion de telefono

    if (post.telefono == "".trim() || post.telefono == null || post.telefono === undefined) {
        response.json({
            state: false,
            mensaje: "el campo telefono es obligatorio"
        })
        return false
    }

    if (post.telefono.length < 7) {
        response.json({
            state: false,
            mensaje: "el campo telefono debe contener minimo  7 caracteres"
        })
    }

    if (post.telefono.length > 10) {
        response.json({
            state: false,
            mensaje: "el campo telefono debe ser menos a 10 caracteres"
        })
    }

    // validacion estado civil

    if (post.estadoCivil == "".trim() || post.estadoCivil == null || post.estadoCivil === undefined) {
        response.json({
            state: false,
            mensaje: "el campo estadoCivil es obligatorio"
        })
        return false
    }

    if (post.estadoCivil.length < 1) {
        response.json({
            state: false,
            mensaje: "el campo estadoCivil debe contener minimo 1 caracteres"
        })
    }

    if (post.estadoCivil.length > 7) {
        response.json({
            state: false,
            mensaje: "el campo estadoCivil debe ser menos a 7 caracteres"
        })
    }

    datos.push({
        nombre: post.nombre,
        cedula: post.cedula,
        edad: post.edad,
        telefono: post.telefono,
        estadoCivil: post.estadoCivil
    })
    ModelUsuarios.Guardar(post, function(respuesta){
    response.json(respuesta)
})
})

// usuariosController.ListarUsuarios = function
app.post("/usuarios/Listar", function(req, response) {
    var post =
    {
        cedula: req.body.cedula,
        edad: req.body.edad
    }

        datos.push({
        cedula: post.cedula,
        edad: post.edad
    })
    ModelUsuarios.ListarUsuarios (null, function(respuesta){
        response.json(respuesta)
        console.log(respuesta,"marcado");
})
})

// usuariosController.ActualizarPorCedula = function
app.post("/usuarios/Actualizar", function (req, response) {
    var post = {
        cedula: req.body.cedula,
        edad: req.body.edad
    }

    console.log(post.cedula,post.edad,"prueba");

    if (post.cedula == "" || post.cedula == undefined || post.cedula == null) {
        response.json({
            state: false,
            mensaje: "el campo cedula es obligatorio"
        })
    }
    if (post.edad == "" || post.edad == undefined || post.edad == null) {
        response.json({
            state: false,
            mensaje: "el campo edad es obligatorio"
        })
    }
    console.log(post.cedula,"post para ander");
    console.log(datos[0].cedula,"datos para ander");
    var posicion = datos.findIndex((item) => item.cedula == post.cedula)
    console.log(posicion,"posicion");
    if (posicion == -1) {
        response.json({
            state: false,
            mesanje: " La cedula no exite"
        })
    }
    post.posicion= posicion
    ModelUsuarios.ActualizarPorCedula(post,function(respuesta){
        response.json(respuesta)
    })
    datos.push({
        cedula: post.cedula,
        edad: post.edad
    })
})

// usuariosController.BorrarPorCedula = function
app.post("/usuarios/Borrar", function (req, response) {
    var post = {
        cedula: req.body.cedula
    }
    console.log(post.cedula, "pela");

    if (post.cedula == "" || post.cedula == undefined || post.cedula == null) {
        response.json({
            state: false,
            mensaje: "el campo cedula es obligatorio"
        })
    }

    if (posicion == -1) {
        response.json({
            state: false,
            mesanje: " La cedula no exite"
        })
    }
    var posicion = datos.findIndex((item) => item.cedula == post.cedula)

    ModelUsuarios.BorrarPorCedula(posicion,function(respuesta){
        response.json(respuesta)
    })
})

module.exports.usuarios = usuariosController