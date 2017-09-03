module.exports.index = function (app, req, res) {
  var connection = app.config.dbConn();
  var noticiaModel = new app.app.models.NoticiasDAO(connection);

  noticiaModel.get5UltimasNoticias(function (error, result) {
    console.log(result);
    res.render('home/index', { noticias: result });
  });
}