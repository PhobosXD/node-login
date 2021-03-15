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

const server = http.createServer(app);
server.listen(port);
console.log('[*]Escutando na porta ' + port + '!');