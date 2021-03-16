const logout = (app) => {
    app.route('/logout')
    .post((req, res) => {
        res.json({
            auth: false,
            token: null
        });
    });
}

module.exports = logout;