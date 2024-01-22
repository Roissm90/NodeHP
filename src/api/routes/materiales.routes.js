const express = require('express');
const {getMateriales, postMateriales, deleteMateriales, putMateriales} = require("../controllers/materiales.controller")
const materialesRouter = express.Router();
const { uploadToCloudinary } = require('../middleware/file.middleware');
const {upload} = require('../middleware/file.middleware');
const Materiales =  require('../models/materiales.model')

materialesRouter.get("/",getMateriales)
materialesRouter.post("/",postMateriales)
materialesRouter.delete("/:id",deleteMateriales)
materialesRouter.put("/:id",putMateriales)
materialesRouter.put('/add-photo/:id', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
    try {
      const libroId = req.params.id; // Obtén el ID de la casa de los parámetros de ruta
      const libroPicture = req.file_url ? req.file_url : null; // Verifica si hay una URL de imagen
  
      const updatedLibro = await Libro.findByIdAndUpdate(libroId, { picture: libroPicture }, { new: true });
  
      if (!updatedLibro) {
        return res.status(404).json({ error: 'Libro no encontrada' });
      }
  
      return res.status(200).json(updatedLibro);
    } catch (err) {
      next(err);
    }
  });

module.exports = materialesRouter;