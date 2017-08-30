
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
    app.post('/noticias/salvar', (req, res) => {
        var conn = app.config.dbConn();
        var noticiaModel = app.app.models.noticiaModel;
        var noticia = req.body;

        noticiaModel.salvarNoticia(noticia, conn, (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.redirect('/noticias');
        });

    });
}