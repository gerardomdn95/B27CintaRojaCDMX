const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => (console.log('Servidor escuchando en el puerto 3000')));

app.use('/', routes);