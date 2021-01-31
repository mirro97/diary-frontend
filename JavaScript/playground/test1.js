// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person = new Person ('Jin', 99);
// console.log(person.age);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hi! My name is ${this.name}.`);
// };

// const me  = new Person('Jin', 99);
// me.sayHello();

// class Person {
//     constructor (firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
    
//     sayHello() {
//         console.log(`Hi! My name is ${this.fullName}`);
//     }
// }

// const me = new Person('Jin', 'Kim');

// me.sayHello();

class Animal {
    constructor(name){
        this.name =name;
    }
    attack (){
        console.log('attack');
    }
}

class Lion extends Animal {
    constructor (name, color){
        super(name);
        this.color = color
    }

    attack (){
        console.log('attack!!');
    }
}

const lion = new Lion('leo', 'white');
lion.attack();