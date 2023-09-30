const express = require('express')
const router = express.Router()
const actorController = require('../Controllers/actorController')

router.get('', actorController.getAllActors)
router.get('/id/:id', actorController.getOneActor)
router.get('/nombre/:nombre', actorController.getActorByName)
router.post('', actorController.createActor)
router.patch('/id/:id', actorController.updateActorById)
router.patch('/nombre/:nombre', actorController.updateActorByName)
router.delete('/id/:id', actorController.deleteActor)

module.exports = router