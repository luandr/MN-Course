
module.exports = () => {
    this.getNoticias = (conn, callback) => {
        conn.query('select id, titulo, noticia from noticias', callback);
    }
    this.salvarNoticia = (obj, conn, callback) => {
        conn.query('insert into noticias set ?', obj, callback);
    }
    return this;
}