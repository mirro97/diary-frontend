// ex1
function merge<T1, T2> (a: T1, b: T2){
    return{
        ...a, ...b
    };
}

const merged = merge({foo: 1}, {bar: 2, foobar: 3});

// ex2
function wrap<T>(param: T){
    return {
        param
    };
}

const wrapped = wrap('ppp');

// ex3
type Items<T, V> = {
    list: T[];
    value: V
};

const items: Items<number, string> = {
    list: [1, 2, 3],
    value: 'aaa',
};

// ex4
class Queue<T> {
    list: T[] = [];

    get length(){
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while(queue.length > 0){
    console.log(queue.dequeue());
}