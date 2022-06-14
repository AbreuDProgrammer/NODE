var processRequest = require('processRequest');
var aplicacao = processRequest(1212);

class CriadorSites
{
	sites = [
		{
			nome: "pessoas",
			array: [
				{nome:"Sergio", idade:40, profissao:"formador",salario: 300},
				{nome:"Ana", idade:20, profissao:"aluna",salario: 50},
				{nome:"Maria", idade:17, profissao:"aluna",salario: 50},
				{nome:"Pedro", idade:19, profissao:"medico",salario: 3000}
			]
		},
		{
			nome: "cursos",
			array: [
				{nome:"Prog", anos:3, local:"funchal",custo: 300},
				{nome:"Saude", anos:3, local:"R.Brava",custo: 50},
				{nome:"Contabilidade", anos:2, local:"Machico",custo: 50},
				{nome:"Eletronica", anos:2, local:"P. Santo",custo: 3000}
			]
		}
	];
	criarSites()
	{
		for(var i of this.sites)
		{
			var nomeSite = '/' + i.nome;
			var arrayJson = JSON.stringify(i.array);
			console.log(aplicacao.get);
			aplicacao.get(nomeSite, function(req, res){
				console.log(nomeSite);
				res.write(arrayJson);
				res.end();
			});
		}
	}
}
var criador = new CriadorSites();
criador.criarSites();

/*
 * -------------------------------------- COMENTÁRIO IMPORTANTE --------------------------------------
 * Não consegui terminar, o problema parece ser que a funcionalidade metodo.get() guarda o registro
 * apenas do último objeto do for, então qualquer conexão é levada ao último objeto.
 * No exemplo do professor está instanciado duas veses a funcionalidade oque faz com que funcione em ambas.
 * Os dois sites conectam porém os dois levam a mesma funcionalidade com o mesmo JSON, pode ver isso com o nome no console sendo sempre /cursos
 * A solução seria conseguir de alguma maneira instanciar as funcionalidades uma vez para cada objeto, não consegui
 * terminar mas não devo estar tão longe.
*/