// models/Asignatura.js

const mongoose = require('mongoose');

const AsignaturaSchema = new mongoose.Schema({
    idAsignatura: { type: String, required: true },
    nombre: { type: String, required: true },
    pEducativo: { type: String, required: true },
    idDocente: { type: String, required: true }
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);
