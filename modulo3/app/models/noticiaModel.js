module.exports = () => {
    this.getNoticias = (conn, callback) => {
        conn.query('select id, titulo, noticia from noticias', callback);
    }
    return this;
}