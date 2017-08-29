module.exports = (app) => {

    app.get('/noticia/:id', (req, res) => {
        var conn = app.config.dbConn();

        conn.query('select id, titulo, noticia from noticias where id=' + req.params.id, (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticia', { noticia: result });
        });
    });


}