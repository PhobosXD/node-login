const login = (app) => {
    app.route('/login')
    .post((req, res) => {
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
}

module.exports = login;