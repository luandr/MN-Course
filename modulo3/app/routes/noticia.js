module.exports = (app) => {

    app.get('/noticia', (req, res) => {
        var conn = app.config.dbConn();

        conn.query('select id, titulo, noticia from noticias where id=1', (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticia', { noticia: result });
        });
    });


}