// routes/asignatura.js

const express = require('express');
const router = express.Router();
const Asignatura = require('../models/Asignatura');

// Ruta para agregar una nueva Asignatura
router.post('/asignatura', async (req, res) => {
    try {
        const { idAsignatura, nombre, pEducativo, idDocente } = req.body;
        const nuevaAsignatura = new Asignatura({ idAsignatura, nombre, pEducativo, idDocente });
        await nuevaAsignatura.save();
        res.status(201).json({ message: 'Asignatura agregada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la asignatura', error });
    }
});

// Ruta para obtener todas las Asignaturas
router.get('/asignatura', async (req, res) => {
    try {
        const asignaturas = await Asignatura.find();
        res.status(200).json(asignaturas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las asignaturas', error });
    }
});


module.exports = router;
