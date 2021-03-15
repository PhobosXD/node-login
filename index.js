require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.json({message: 'Tudo certo!'});
    } catch (error) {
        console.log(error);
    }
});

app.get('/clientes', (req, res) => {
    try {
        res.json([{id: 1, nome: 'Cazuza'}]);
        console.log('[*]Retornou todos os clientes!');
    } catch (error) {
        console.log(error);
    }
});

app.post('/login', (req, res) => {
    //user = req.body.user;
    //password = req.body.password;

    if (req.body.user == 'cazuza' && req.body.password == 'teste') {
        try {
            const id = 1;
            const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 300});

            console.log('[*]Login sucess!');
            return res.json({auth: true, token: token});
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('[*]Login fail!');
        res.status(500).json({message: 'Login inválido!'});
    }
});

const server = http.createServer(app);
server.listen(port);
console.log('[*]Escutando na porta ' + port + '!');