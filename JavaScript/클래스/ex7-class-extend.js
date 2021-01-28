// 상속 기본

class Parent {
    name = 'Kang';
    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();

console.log(p, c);

c.hello();

c.name = 'May';

c.hello();