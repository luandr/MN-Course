
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
    });
    app.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;
        console.log(noticia);

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();
        console.log(erros);
        if (erros) {
            res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
            return;
        }

        var conn = app.config.dbConn();
        var noticiaModel = new app.app.models.NoticiasDAO(conn);

        noticiaModel.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias');
        });

    });
}