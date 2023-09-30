const express = require('express')
const router = express.Router()
const actorRouter = require('./actorRoutes')
const directorRouter = require('./directorRoutes')
const peliculaRouter = require('./peliculaRoutes')

router.use('/actores', actorRouter)
router.use('/directores', directorRouter)
router.use('/peliculas', peliculaRouter)

module.exports = router