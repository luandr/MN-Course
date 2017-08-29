module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        var mysql = require('mysql');
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'toor',
            database: 'portal_noticias'
        });

        conn.query('select * from noticias', (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticias', { noticias: result });
        });


    });
}