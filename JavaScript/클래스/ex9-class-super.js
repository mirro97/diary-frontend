// super - 클래스의 상속 생성자 함수 변경

class Parent {
    name;

    constructor (name){
        this.name = name;
    }

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor (name, age){
        // 부모에서 해야하는 일을 super로 받아와 먼저 하게 한다
        super(name);
        this.age = age;
    }

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('sujeong');
const c = new Child('sujeong', 25);

console.log(p, c);

c.hello();