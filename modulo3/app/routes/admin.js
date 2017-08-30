
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
    app.post('/noticias/salvar', (req, res) => {
        var conn = app.config.dbConn();
        var noticiaModel = new app.app.models.NoticiasDAO(conn);
        var noticia = req.body;

        noticiaModel.salvarNoticia(noticia, (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.redirect('/noticias');
        });

    });
}