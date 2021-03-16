const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
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

module.exports = verifyJwt;