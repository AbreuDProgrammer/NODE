/*
    Funções úteis para projetos, desenvolvidas para todos os usos
*/

// Define um intervalo que executa uma chamada até um final limite em segundos
var intervalo = function(chamada, tempo, fim)
{
    setTimeout(function(){
        chamada();
        fim -= tempo;
        if(fim > 0)
            intervalo(chamada, tempo, fim);
    },tempo)
}
module.exports.intervalo = intervalo;

//Funções para verificar o tipo da variavel
var isObj = function(value)
{
    return value instanceof Object;
}
var isInt = function(value)
{
    return value instanceof Number;
}
var isArray = function(value)
{
    return value instanceof Array;
}
var isString = function(value)
{
    return value instanceof String;
}
module.exports.isObj = isObj;
module.exports.isInt = isInt;
module.exports.isArray = isArray;
module.exports.isString = isString;