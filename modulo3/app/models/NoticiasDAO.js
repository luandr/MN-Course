function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._conn.query('select id, titulo, noticia from noticias where id=1', callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._conn.query('select id, titulo, noticia from noticias', callback);
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