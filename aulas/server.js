class Server
{
    myC = this.req('./../biblioteca/console.js');
    req(r)
    {
        return require(r);
    }
    aulas = 
    {
        aula7()
        {
            require('aula7');
            require('aula7C');
        },
        aula8()
        {
            require('aula8');
            require('aula8C');
        }
    }
}
var server = new Server();
process.stdin.on('readable', function(){
    var cLido = process.stdin.read().toString().trim();
    server.aulas[cLido]();
});