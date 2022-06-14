var obj = require('./ficheiro.json');
var processRequest = require('./processRequest');
var aplicacao = processRequest(2412);

aplicacao.get('/pessoas', function(req, res){
    //var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var listaPaps = obj.paps;
    listaPaps.forEach(element => {
        res.write(element.aluno+" ");
        if(element.hasOwnProperty('listaTopicos')){
            var topicos = element.listaTopicos.topicos;
            res.write(topicos[0].tempo.toString());
        }
    });
});