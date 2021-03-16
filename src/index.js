require('dotenv-safe').config();
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;
const clientes = require('./routes/Clientes');
const login = require('./routes/Login');
const logout = require('./routes/Logout');

app.use(bodyParser.json());

clientes(app);
login(app);
logout(app);

app.get('/', (req, res) => {
    try {
        res.json({message: 'Tudo certo!'});
    } catch (error) {
        console.log(error);
    }
});

const server = http.createServer(app);
server.listen(port);
console.log('[*]Escutando na porta ' + port + '!');