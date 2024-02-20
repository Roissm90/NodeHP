const express = require('express');
const {getMagos, getMagoById ,postMagos,deleteMagos,putMagos} = require("../controllers/magos.controller")
const magosRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Mago =  require('../models/mago.model')

magosRouter.get("/",  getMagos)
magosRouter.get("/detalle/:id", getMagoById)
magosRouter.post("/register", [upload.single('picture'), uploadToCloudinary], postMagos)
magosRouter.delete("/delete/:id", deleteMagos)
magosRouter.put("/:id", putMagos)

module.exports = magosRouter;