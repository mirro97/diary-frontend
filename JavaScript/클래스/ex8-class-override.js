// 변수, 함수 추가 및 오버라이딩 - 오버라이딩: 부모에서 구현된 함수나 변수가 자식에게 똑같은 이름으로 구현시킨다 = 자식의 함수/변수가 부모의 함수/변수를 덮어씌우는 것
class Parent {
    name = 'Kang';

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 25;

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();

const c = new Child();

console.log(p, c);

c.hello();

c.name = 'Anna';

c.hello();