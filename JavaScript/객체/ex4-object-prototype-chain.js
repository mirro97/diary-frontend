// prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function () {
    //     console.log('hello', name, age);
    // }
}

Person.prototype.hello = function () {
    console.log('hello', this.name,this.age);
}


const p = new Person('Mark', 25);


p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);