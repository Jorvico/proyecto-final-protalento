
const Actor = require('../Models/actorModel')

exports.getAllActors = async (req, res) => {
    const Actores = await Actor.find()
    return res.status(200).json(Actores)
}

exports.getOneActor = async (req, res) => {
    const {id} = req.params
    console.log(id)
    const actor = await Actor.findById(id)
    return res.status(200).json(actor) 
}

exports.getActorByName = async (req, res) => {
    try {
        const {nombre} = req.params
        const actor = await Actor.findOne({nombre: nombre})
        if(!actor){
            return res.status(404).json({ error: 'Actor no encontrado' });
        }
        return res.status(200).json(actor)
    } catch (error) {
        return res.status(500).json({ error: 'Error al buscar el actor' });
    }
    
    
}

exports.createActor = async (req, res) => {
    try {
        const newActor = new Actor({...req.body});
        const insertedActor = await newActor.save();
        return res.status(201).json(insertedActor);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.nombre) {
            return res.status(400).json({ error: 'El nombre del actor ya existe.' });
        }
        return res.status(500).json({ error: 'Ha ocurrido un error al crear el actor.' });
    }
}

exports.updateActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actorExistente = await Actor.findById(id);
        if (!actorExistente) {
            return res.status(404).json({ error: 'Actor no encontrado' });
        }

        await Actor.updateOne({ _id: id }, { ...req.body });
        const actorActualizado = await Actor.findById(id);

        return res.status(201).json(actorActualizado);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el actor' });
    }
    
}

exports.updateActorByName = async (req, res) => {
    try {
        const { nombre } = req.params;
        const actorActualizado = await Actor.findOneAndUpdate(
            { nombre: nombre },
            { $set: req.body },
            { new: true }
        );

        if (!actorActualizado) {
            return res.status(404).json({ error: 'Actor no encontrado' });
        }

        return res.status(201).json({nombre: actorActualizado.nombre});
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el actor' });
    }
    
}

exports.deleteActor = async (req, res) => {
    const {id} = req.params
    const ActorABorrar = await Actor.findByIdAndDelete(id)
    res.status(204).json(ActorABorrar) 
}