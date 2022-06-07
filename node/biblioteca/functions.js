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