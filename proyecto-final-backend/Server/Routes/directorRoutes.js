const express = require('express')
const router = express.Router()
const directorController = require('../Controllers/directorController')

router.get('', directorController.getAllDirectores)
router.get('/id/:id', directorController.getOneDirector)
router.get('/nombre/:nombre', directorController.getDirectorByName)
router.post('', directorController.createDirector)
router.patch('/id/:id', directorController.updateDirectorById)
router.patch('/nombre/:nombre', directorController.updateDirectorByName)
router.delete('/id/:id', directorController.deleteDirector)

module.exports = router