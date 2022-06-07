class myConsole
{
    respostas = [];

    write()
    {
        var answer = this.in();
        this.respostas.push(answer);
    }

    in()
    {
        process.stdin.on('readable',function(){
            var res = process.stdin.read();
            return res;
        });
    }

    log(msg)
    {
        process.stdout.write(msg + '\n');
    }

    error(msg)
    {
        process.stderr.write(msg + '\n');
    }
}
module.exports = new myConsole();