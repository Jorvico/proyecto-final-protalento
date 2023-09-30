const express = require('express')
const router = express.Router()
const peliculaController = require('../Controllers/peliculaController')

router.get('', peliculaController.getAllPeliculas)
router.get('/id/:id', peliculaController.getOnePelicula)
router.get('/nombre/:nombre', peliculaController.getPeliculaByName)
router.post('', peliculaController.createPelicula)
router.patch('/id/:id', peliculaController.updatePeliculaById)
router.patch('/nombre/:nombre', peliculaController.updatePeliculaByName)
router.delete('/id/:id', peliculaController.deletePelicula)

module.exports = router