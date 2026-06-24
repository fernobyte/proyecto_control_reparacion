const express = require('express');
const router = express.Router();

const controlPersonas = require('../controllers/personas');

console.log('Router personas cargado');

// INSERTAR
router.post('/registro', controlPersonas.insertar);

// ELIMINAR
router.get('/eliminar/:id', controlPersonas.eliminarId);

module.exports = router;