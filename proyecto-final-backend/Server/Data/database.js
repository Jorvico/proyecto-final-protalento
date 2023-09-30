const mongoose = require('mongoose') 

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conexion realizada exitosamente con MongoDb')
    } catch (err) {
        console.log('Error en la conexion realizada exitosamente con MongoDb')
    }
}

module.exports = mongoConnect
