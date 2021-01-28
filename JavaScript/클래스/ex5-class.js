// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();

console.log(a);

a.name = 'sujeong';
console.log(a);

console.log(a.name);
console.log(a._name);

//read only 

class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const b = new B();
console.log(b);
b.name = 'sujeong~';
console.log(b);