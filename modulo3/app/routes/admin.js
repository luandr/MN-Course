
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
    app.post('/noticias/salvar', (req, res) => {
        var conn = app.config.dbConn();
        var noticiaModel = new app.app.models.NoticiasDAO(conn);
        var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data','Data é obrigatória').notEmpty();
        req.assert('data','Data é obrigatória').isDate({format: 'YYYY-MM-DD'});
        req.send(noticia.date);
/*         noticiaModel.salvarNoticia(noticia, (err, result) => {
            if (err) {
                res.render('noticias/noticias', { error: err });
            }
            res.redirect('/noticias');
        }); */

    });
}