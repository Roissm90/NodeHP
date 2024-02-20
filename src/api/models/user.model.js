const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    sexo: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mywizard: [{type: Schema.Types.ObjectId, ref: 'mago'}]
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;
