const express = require('express');
const {getPersonajes, getPersonajeById ,postPersonajes,deletePersonajes,putPersonajes} = require("../controllers/personaje.controller")
const personajesRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Personaje =  require('../models/personaje.model')

personajesRouter.get("/",getPersonajes)
personajesRouter.get("/detalle/:id",getPersonajeById)
personajesRouter.post("/",postPersonajes)
personajesRouter.delete("/:id",deletePersonajes)
personajesRouter.put("/:id",putPersonajes)

module.exports = personajesRouter;