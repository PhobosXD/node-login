require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;
const clientes = require('./routes/Clientes');
const login = require('./routes/Login');

app.use(bodyParser.json());

clientes(app);
login(app);

app.get('/', (req, res) => {
    try {
        res.json({message: 'Tudo certo!'});
    } catch (error) {
        console.log(error);
    }
});

app.post('/logout', (req, res) => {
    res.json({auth: false, token: null});
});

const server = http.createServer(app);
server.listen(port);
console.log('[*]Escutando na porta ' + port + '!');