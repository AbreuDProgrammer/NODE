// Iterator
class Iterator
{
    constructor(array)
    {
        this.array = array;
        this.key = 0;
    }
    help()
    {
        var txt = "nome das funções são current(), next(), back(), rewind()";
        return txt;
    }

    current()
    {
        return this.array[this.key];
    }

    next()
    {
        this.key++;
        return this.current();
    }

    back()
    {
        this.key--;
        return this.current();
    }

    rewind()
    {
        this.key = 0;
        return this.current();
    }
}
module.exports.Iterator = Iterator;

// Observer
class Observer
{
    constructor()
    {
        this.list = [];
    }

    attach = obj => this.list.push(obj);

    detach(obj)
    {
        var key = this.list.indexOf(obj);
        this.list.splice(key, 1);
    }

    #notify()
    {
        for(var i = 0; i < this.list.length; i++){
            this.list[i].notified();
        }
    }

    alarm()
    {
        this.#notify();
    }
}
module.exports.Observer = Observer;