var mysql = require('mysql');

var connMySQL = () => {
    console.log("Conexão com o DB estabelecida!");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'toor',
        database: 'portal_noticias'
    });
}
module.exports = () => {
    console.log("Conexão com o DB carregada com sucesso!");
    return connMySQL;
}