// Servidor hecho con express
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// Instancia de express
const app = express();

// Configuración para recibir el cuerpo de una petición
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/sensei', (req, res) => {
    const sensei = {
        name: 'Gerardo',
        role: 'Sensei Cinta Roja',
        message: 'Ey llegó el Sensei, fiesta al 200.'
    }
    res.status(200).send(sensei);
});

// Query parameters
app.get('/multiplication', (req, res) => {

    const num1 = req.query.num1;
    const num2 = req.query.num2;
    
    const result = (parseInt(num1) * parseInt(num2));
    res.status(200).send({ result });
});

// Params
app.get('/suma/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    const result = (parseInt(num1) + parseInt(num2));
    
    res.status(200).send({result});
});

// Objeto
app.post('/resta', (req, res) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = (parseInt(num1) - parseInt(num2));
    
    res.status(200).send({result});
});

app.post('/pokemon', (req, resp) => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemon = req.body.pokemon;

    console.log(pokemon);

    request.get(`${URL}${pokemon}/`, (err, res, body) => {
        const poke_res = JSON.parse(body);
        const name = poke_res.name;
        const type = poke_res.types[0].type.name;
        const id = poke_res.id;
        const poke_obj = {
            name: name,
            id: id,
            type: type,
            moves: {
                move1: poke_res.moves[0].move.name,
                move2: poke_res.moves[1].move.name,
                move3: poke_res.moves[2].move.name,
                move4: poke_res.moves[3].move.name
            }
        };
        resp.status(200).send({ 'personaje': poke_obj });
    });
});

app.listen(3000, () => (console.log('Servidor escuchando en el puerto 3000')));
