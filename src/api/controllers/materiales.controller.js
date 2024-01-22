const Materiales = require("../models/materiales.model");

const getMateriales = async (req, res) => {
  try {
    const allMateriales = await Materiales.find();
    return res.status(200).json(allMateriales);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postMateriales = async (req, res) => {
  try {
    const newMaterial = new Materiales(req.body);
    const createdMaterial = await newMaterial.save();
    return res.status(201).json(createdMaterial);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteMateriales = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMaterial = await Materiales.findByIdAndDelete(id);
    if (!deletedMaterial) {
      return res.status(404).json({ message: "El ID del material no existe" });
    }
    return res.status(200).json(deletedMaterial);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putMateriales = async (req, res) => {
  try {
    const { id } = req.params;
    const putMaterial = new Materiales(req.body);
    putMaterial._id = id;

    const updatedMaterial = await Materiales.findByIdAndUpdate(id, putMaterial, {
      new: true,
    });
    if (!updatedMaterial) {
      return res.status(404).json({ message: "El ID de este material no existe" });
    }
    return res.status(200).json(updatedMaterial);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getMateriales, postMateriales, deleteMateriales, putMateriales };
