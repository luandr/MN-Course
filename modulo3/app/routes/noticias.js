module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        var conn = app.config.dbConn();
        var noticiaModel = new app.app.models.NoticiasDAO(conn);

        noticiaModel.getNoticias((err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticias', { noticias: result });
        });
    });


}