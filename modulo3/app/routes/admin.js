
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
    app.post('/noticias/salvar', (req, res) => {
        var noticias = req.body;
        console.log(noticias);
        res.render('admin/form_add_noticia');
    });
}