//cfg app
var app = require('./config/server');

//vars
var port = 3000; //seta a porta como variavel



//escuta a porta 'port'
app.listen(port, () => {
    console.log('Servidor ouvindo na porta ' + port);
})