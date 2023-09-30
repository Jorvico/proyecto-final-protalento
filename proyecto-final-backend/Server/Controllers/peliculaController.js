const Pelicula = require('../Models/peliculaModel')

exports.getAllPeliculas = async (req, res) => {
    const peliculas = await Pelicula.find()
    console.log(peliculas)
    return res.status(200).json(peliculas)
}

exports.getOnePelicula = async (req, res) => {
    const {id} = req.params
    console.log(id)
    const pelicula = await Pelicula.findById(id)
    return res.status(200).json(pelicula) 
}

exports.getPeliculaByName = async (req, res) => {
    try {
        const {nombre} = req.params
        const pelicula = await Pelicula.findOne({nombre: nombre})
        if(!pelicula){
            return res.status(404).json({ error: 'Pelicula no encontrado' });
        }
        return res.status(200).json(pelicula)
    } catch (error) {
        return res.status(500).json({ error: 'Error al buscar el pelicula' });
    }
    
    
}

exports.createPelicula = async (req, res) => {
    try {
        const nuevaPelicula = new Pelicula({...req.body});
        const peliculaInsertado = await nuevaPelicula.save();
        return res.status(201).json(peliculaInsertado);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.nombre) {
            return res.status(400).json({ error: 'El nombre del pelicula ya existe.' });
        }
        return res.status(500).json({ error: 'Ha ocurrido un error al crear el pelicula.' });
    }
}

exports.updatePeliculaById = async (req, res) => {
    try {
        const { id } = req.params;
        const peliculaExistente = await Pelicula.findById(id);
        if (!peliculaExistente) {
            return res.status(404).json({ error: 'Pelicula no encontrado' });
        }

        await Pelicula.updateOne({ _id: id }, { ...req.body });
        const peliculaActualizada = await Pelicula.findById(id);

        return res.status(201).json(peliculaActualizada);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el pelicula' });
    }
    
}

exports.updatePeliculaByName = async (req, res) => {
    try {
        const { nombre } = req.params;
        const peliculaActualizada = await Pelicula.findOneAndUpdate(
            { nombre: nombre },
            { $set: req.body },
            { new: true }
        );

        if (!peliculaActualizada) {
            return res.status(404).json({ error: 'Pelicula no encontrado' });
        }

        return res.status(201).json({nombre: peliculaActualizada.nombre});
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el pelicula' });
    }
    
}

exports.deletePelicula = async (req, res) => {
    const {id} = req.params
    const peliculaABorrar = await Pelicula.findByIdAndDelete(id)
    res.status(204).json(peliculaABorrar) 
}