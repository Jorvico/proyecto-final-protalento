const express = require('express')
const mongoConnect = require('./Server/Data/database.js') 
const app = express()
const routes = require('./Server/Routes/router')

//Middleware Autencitacion
//const authMiddleware = require('./Server/Controllers/auth')

//Se agrega cors para integrar aplicaciones
const cors = require('cors')

//Se usa para crear variables de entorno
require('dotenv').config()

app.use(express.json())

app.use(cors('*'))

mongoConnect()
console.log(mongoConnect)
//Para el middleware sea usado en la ruta api
//app.use('/api', authMiddleware)


//Para que la app use el modulo routes
app.use('/api', routes)



app.listen(process.env.PORT, () =>{
    console.log(`El servidor esta en ejecucion en localhost:${process.env.PORT}`)
})