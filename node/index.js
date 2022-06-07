class Aula
{
    require;
    functions = require('./biblioteca/functions.js');
    myConsole = require('./biblioteca/console.js');
    aula1()
    {
        // Evitar Spam
        this.require = require('aula1');
        var obj1 = new aula1();
        var obj2 = new aula1();
        console.log(obj1 === obj2);
        console.log(obj1.generate());
        console.log(obj2.generate());
    }
    aula2()
    {
        this.require = require('aula2');
        console.log(this.require.generate());
    }
    aula3()
    {
        this.require = require('aula3');
    }
    aula4()
    {
        this.require = require('aula4');
    }
    server()
    {
        this.require = require('aula5');
    }
    desafio()
    {
        var processRequest = require('processRequest');
        var aplicacao = processRequest(1212);

        var pessoas = [
        {nome:"Sergio", idade:40, profissao:"formador",salario: 300},
        {nome:"Ana", idade:20, profissao:"aluna",salario: 50},
        {nome:"Maria", idade:17, profissao:"aluna",salario: 50},
        {nome:"Pedro", idade:19, profissao:"medico",salario: 3000}
        ];
        var cursos = [
        {nome:"Prog", anos:3, local:"funchal",custo: 300},
        {nome:"Saude", anos:3, local:"R.Brava",custo: 50},
        {nome:"Contabilidade", anos:2, local:"Machico",custo: 50},
        {nome:"Eletronica", anos:2, local:"P. Santo",custo: 3000}
        ];

        aplicacao.get('/pessoas',function(req,res){
            res.write(JSON.stringify(pessoas));
            res.end();
        });
        aplicacao.get('/cursos',function(req,res){
            res.write(JSON.stringify(cursos));
            res.end();
        });
        aplicacao.post('/pessoas',function(req,res){
            res.write(JSON.stringify(cursos));
            res.end();
        });
        aplicacao.post('/cursos',function(req,res){
            res.write(JSON.stringify(cursos));
            res.end();
        });
    }
}
var aula = new Aula();
aula.desafio();