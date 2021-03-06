// Recebe o protocolo http
var http = require('http');

// Funcao ecarregada de criar métodos para os gets e posts na url
var criarProcessRequest = function(porta){ // Porta é qual a ligação de entrada do servidor
	var entrada = {}; // Variável que guarda as funções gets e posts usadas no index para criar as mensagens ou variaveis
	var caminhos = {}; // Variavel que guarda os nomes dos gets e posts
	var metodos = ['GET','POST']; // Os metodos que serão percorridos
	metodos.forEach(function(metodo){ // Percorre duas veses passando pelos metodos get e post
		caminhos[metodo] = {};
		//      metodo.toLowerCase() é o que explica o porque de usarmos os nomes em minúsculas
		entrada[metodo.toLowerCase()] = function(path, fn){ // Cria uma biblioteca que designa os nomes dos gets e pots, ex /Cursos ou /Pessoas
			caminhos[metodo][path] = fn;
		};
	});
	http.createServer(function(req,res){
		res.setHeader('Access-Control-Allow-Origin','*');
		// Caso o caminho digitado não esteja guardado no array associativo, o user é redirecionado para a pagina 404 e o servidor encerra
		if(!caminhos[req.method][req.url]){
			res.statusCode = 404;
			return res.end(); // Retorna para garantir que o código não passa daqui, e encerra a ligação com o servidor
		}
		caminhos[req.method][req.url](req,res); // executa o caminhos[GET]['/pessoas'](req,res); declaramos no index
	}).listen(porta); // Define a porta passado no parametro da biblioteca criarProcessRequest
	return entrada; // Retorna
};

module.exports = criarProcessRequest; // Exporta a biblioteca com a funcionalidade de criar o servidor e definir as funcionalidades de cada url