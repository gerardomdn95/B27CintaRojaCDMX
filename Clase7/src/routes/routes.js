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

// Métodos CRUD de cursos

// Create
router.post('/devf/api/v1/cursos', (req, res) => {
    const json = req.body;
    const nuevoCurso = Curso(json)

    nuevoCurso.save((err, curso) => {
        err
            ? res.status(409).send(err)
            : res.status(420).send(curso)
    });
});

// Read
router.get('/devf/api/v1/cursos', (req, res) => {
    Curso
        .find()
        .exec()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch(error => res.status(404).error(error))
});

// Read an specific element by ID
router.get('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id;

    Curso
        .findById(cursoId)
        .exec()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch(error => res.status(404).error(error))
});

// UPDATE
router.put('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id;
    const json = req.body;

    Curso
        .findOneAndUpdate(
            cursoId,
            { $set: json },
            { new: true }
        )
        .exec()
        .then(cursoActualizado => {
            res.status(200).send(cursoActualizado)
        })
        .catch(error => res.status(400).send(error));
});

// Delete
router.delete('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id;

    Curso
        .findByIdAndRemove(cursoId)
        .exec()
        .then(cursoEliminado => {
            res.status(204).send({ message: 'El curso se borró exitosamente' });
        })
        .catch(error => res.status(404).send(error));
});

// Crud de Alumnos

module.exports = router;