require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;

function verifyJwt(req, res, next) {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'Nenhum token providenciado!'
        });
    }

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            return res.status(500).json({
                auth: false,
                message: 'Falha na autenticação de usuário!'
            });
        }

        req.userId = decoded.id;
        next();
    });
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.json({message: 'Tudo certo!'});
    } catch (error) {
        console.log(error);
    }
});

app.get('/clientes', verifyJwt, (req, res) => {
    try {
        res.json([{id: 1, nome: 'Cazuza'}]);
        console.log('[*]Retornou todos os clientes!');
    } catch (error) {
        console.log(error);
    }
});

app.post('/login', (req, res) => {
    if (req.body.user == 'cazuza' && req.body.password == 'teste') {
        try {
            const id = 1;
            const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 300});

            console.log('[*]Login sucess!');
            return res.json({auth: true, token: token});
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log('[*]Login fail!');
    res.status(500).json({message: 'Login inválido!'});
});

app.post('/logout', (req, res) => {
    res.json({auth: false, token: null});
});

const server = http.createServer(app);
server.listen(port);
console.log('[*]Escutando na porta ' + port + '!');