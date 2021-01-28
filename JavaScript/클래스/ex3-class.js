// 맴버 변수

class A {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('sujeong', 25));

// class field는 런타임 확인

class B {
    name;
    age;
}

class C {
    name = 'no name';
    age = 0;
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('sujeong', 25));