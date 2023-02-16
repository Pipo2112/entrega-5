global.express = require('express')
global.app = express()
global.bodyParse = require('body-parser')
global.datos = []
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;
    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");
    next()
})

require("./routes")
app.listen(3000, function () {

})