//Importar mongoose
const mongoose = require('mongoose')

//Definir la estructura del documento que se va a crear
const actorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        unique: true,
    },
    fechaNacimiento: {
        type: Date,
    }
},{
    timestamps: true
})

const Actor = mongoose.model('Actor', actorSchema)
module.exports = Actor