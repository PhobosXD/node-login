const verifyJwt = require('../auth/Verify')

const clientes = (app) => {
    app.route('/clientes')
    .get(verifyJwt, (req, res) => {
        try {
            res.json([{
                id: 1,
                name: 'Cazuza'
            }]);
            console.log('[*]Retornou todos os clientes!');
        } catch (error) {
            console.log(error);
        }
    });
}

module.exports = clientes;