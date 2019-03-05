const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema({
    alumno: ObjectId,
    nombre: String,
    apellidos: String,
    edad: Number,
    genero: String,
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = { Alumno };