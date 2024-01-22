const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialesSchema = new Schema(
    {
        madera: [
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true}, 
            {type: String, require: true},
        ],
        nucleo: [{type: String, require: true}, {type: String, require: true}, {type: String, require: true}, {type: String, require: true}],
        longitud: [
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true}, 
            {type: Number, require: true},
            {type: Number, require: true},
            {type: Number, require: true},
            {type: Number, require: true},
            {type: Number, require: true}
        ],
        flexibilidad: [{type: String, require: true}, {type: String, require: true}, {type: String, require: true}, {type: String, require: true}, {type: String, require: true}]
    },
    {
        timestamps: true
    }
)

const Materiales = mongoose.model('materiales', materialesSchema);

module.exports = Materiales;