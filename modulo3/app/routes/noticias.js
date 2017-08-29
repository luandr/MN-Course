module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        var conn = app.config.dbConn();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(conn, (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.render('noticias/noticias', { noticias: result });
        });
    });


}