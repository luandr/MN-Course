//cfg app
var app = require('./config/server');


//routes old
/* var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app); //pode ser feito assim
var rotaHome = require('./app/routes/home')(app);//ou assim
var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app); */

//vars
//seta a porta como variavel
var port = 8080;


//escuta a porta 'port'
app.listen(port, () => {
    console.log('Servidor ouvindo na porta ' + port);
})