const Director = require('../Models/directorModel')

exports.getAllDirectores = async (req, res) => {
    const directores = await Director.find()
    console.log(directores)
    return res.status(200).json(directores)
}

exports.getOneDirector = async (req, res) => {
    const {id} = req.params
    console.log(id)
    const director = await Director.findById(id)
    return res.status(200).json(director) 
}

exports.getDirectorByName = async (req, res) => {
    try {
        const {nombre} = req.params
        const director = await Director.findOne({nombre: nombre})
        if(!director){
            return res.status(404).json({ error: 'Director no encontrado' });
        }
        return res.status(200).json(director)
    } catch (error) {
        return res.status(500).json({ error: 'Error al buscar el director' });
    }
    
    
}

exports.createDirector = async (req, res) => {
    try {
        const nuevoDirector = new Director({...req.body});
        const directorInsertado = await nuevoDirector.save();
        return res.status(201).json(directorInsertado);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.nombre) {
            return res.status(400).json({ error: 'El nombre del director ya existe.' });
        }
        return res.status(500).json({ error: 'Ha ocurrido un error al crear el director.' });
    }
}

exports.updateDirectorById = async (req, res) => {
    try {
        const { id } = req.params;
        const directorExistente = await Director.findById(id);
        if (!directorExistente) {
            return res.status(404).json({ error: 'Director no encontrado' });
        }

        await Director.updateOne({ _id: id }, { ...req.body });
        const directorActualizado = await Director.findById(id);

        return res.status(201).json(directorActualizado);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el director' });
    }
    
}

exports.updateDirectorByName = async (req, res) => {
    try {
        const { nombre } = req.params;
        const directorActualizado = await Director.findOneAndUpdate(
            { nombre: nombre },
            { $set: req.body },
            { new: true }
        );

        if (!directorActualizado) {
            return res.status(404).json({ error: 'Director no encontrado' });
        }

        return res.status(201).json({nombre: directorActualizado.nombre});
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el director' });
    }
    
}

exports.deleteDirector = async (req, res) => {
    const {id} = req.params
    const directorABorrar = await Director.findByIdAndDelete(id)
    res.status(204).json(directorABorrar) 
}