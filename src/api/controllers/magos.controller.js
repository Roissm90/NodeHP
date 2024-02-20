const Mago = require("../models/mago.model");

const getMagos = async (req, res) => {
  try {
    const allPersonajes = await Mago.find()
    return res.status(200).json(allPersonajes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getMagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const personaje = await Mago.findById(id)

    if (!personaje) {
      return res.status(404).json({ message: "El personaje no fue encontrado" });
    }

    return res.status(200).json(personaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postMagos = async (req, res) => {
  try {
    
    const newPersonaje = new Mago(req.body);
    newPersonaje.picture = req.file_url;

    const createdPersonaje = await newPersonaje.save();
    return res.status(201).json(createdPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMagos = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPersonaje = await Mago.findByIdAndDelete(id);
    if (!deletedPersonaje) {
      return res.status(404).json({ message: "El ID del personaje no existe" });
    }
    return res.status(200).json(deletedPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putMagos = async (req, res) => {
  try {
    const { id } = req.params;
    const putPersonaje = new Mago(req.body);
    putPersonaje._id = id;

    const updatedPersonaje = await Mago.findByIdAndUpdate(id, putPersonaje, {
      new: true,
    });
    if (!updatedPersonaje) {
      return res.status(404).json({ message: "El ID de este libro no existe" });
    }
    return res.status(200).json(updatedPersonaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getMagos, getMagoById, postMagos, deleteMagos, putMagos };
