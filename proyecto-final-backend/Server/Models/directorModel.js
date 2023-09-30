//Importar mongoose
const mongoose = require('mongoose')

//Definir la estructura del documento que se va a crear
const directorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: String,
    }
},{
    timestamps: true
})

const Director = mongoose.model('Director', directorSchema)
module.exports = Director