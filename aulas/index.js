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
    aula5()
    {
        // Criar servidor
        this.require = require('aula5');
    }
    aula6()
    {
        // Desafio criar servidor
        this.require = require('aula6');
    }
}
var aula = new Aula();
aula.aula6();