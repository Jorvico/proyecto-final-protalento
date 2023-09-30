const mongoose = require('mongoose')

//Definir la estructura del documento que se va a crear
const peliculaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    anio:{
        type: Date,
    },
    descripcion:{
        type: String,
    },
    genero:{
        type: String,
    },
    duracion:{
        type:Number,
    },
    directors:[{
        type: mongoose.Types.ObjectId,
        ref: 'Director'
    }],
    actores: [{
        type: mongoose.Types.ObjectId,
        ref: 'Actor'
    }]

},{
    timestamps: true
})

const Pelicula = mongoose.model('Pelicula', peliculaSchema)
module.exports = Pelicula