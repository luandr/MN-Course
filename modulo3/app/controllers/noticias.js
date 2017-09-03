module.exports.noticias = function (app, req, res) {
  var conn = app.config.dbConn();
  var noticiaModel = new app.app.models.NoticiasDAO(conn);

  noticiaModel.getNoticias((err, result) => {
    if (err) {
      res.render('noticias/noticias', { error: err });
    }
    res.render('noticias/noticias', { noticias: result });
  });
}

module.exports.noticia = function (app, req, res) {
  var conn = app.config.dbConn();
  var noticiaModel = new app.app.models.NoticiasDAO(conn);

  noticiaModel.getNoticia((err, result) => {
    if (err) {
      res.render('noticias/noticias', { error: err });
    }
    res.render('noticias/noticia', { noticia: result });
  });
}