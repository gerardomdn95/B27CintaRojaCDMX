const express = require('express');
const router = express.Router();

const { Alumno } = require('../models/alumno');
const { Curso } = require('../models/curso');

router.get('/', (req, res) => {
    res.status(200).send('Hola desde rutas');
});

// CRUD
// Create
// Read
// Update
// Delete

router.post('/devf/api/v1/cursos', (req, res) => {
    const json = req.body;
    const nuevoCurso = Curso(json)

    nuevoCurso.save((err, curso) => {
        err
            ? res.status(409).send(err)
            : res.status(420).send(curso)
    });
});

module.exports = router;