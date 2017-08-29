var dbConn = require('../../config/db.conn');
module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        var conn = dbConn();
        conn.query('select * from noticias', (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticias', { noticias: result });
        });


    });
}