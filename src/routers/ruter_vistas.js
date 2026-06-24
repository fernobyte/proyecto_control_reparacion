const express = require('express');
const router = express.Router();
const pagina = require('../controllers/paginas');
const personas = require('../controllers/personas');

// LOGIN (PRIMERA PÁGINA)
router.get('/', pagina.login);

// INDEX (dashboard)
router.get('/index', personas.lista_datos);

module.exports = router;