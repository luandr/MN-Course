function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._conn.query('select autor, titulo, noticia, data_noticia from noticias where id=' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._conn.query('select id, titulo, noticia, data_noticia from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.salvarNoticia = function (obj, callback) {
    console.log(obj);
    this._conn.query('insert into noticias set ?', obj, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._conn.query('select * from noticias order by data_criacao desc limit 5', callback);
}


module.exports = function () {
    return NoticiasDAO;
}