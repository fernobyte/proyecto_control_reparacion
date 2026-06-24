require('dotenv').config();
const { render } = require('ejs');
const express = require('express');
const path = require('path');
const app = express();

const puerto = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/public')));

// Ajuste para la carpeta views dentro de src
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// redireccion de paginas
const RouterPagina= require('./src/routers/ruter_vistas');
console.log('ANTES REQUIRE');

const personas = require('./src/routers/personas_ruter');

console.log('DESPUÉS REQUIRE');

app.use('/', personas);
app.use('/', RouterPagina);


app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});