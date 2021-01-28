// 생성자 함수를 이용해 새로운 객체 만들기
// 생성자 함수는 전부 function 을 사용해서 만들어야한다!
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('sujeong', 25);

console.log(a, a.name, a.age);


// arrow 함수에서는 this가 생성되지 않는다!!!!!
const Cat = (name, age) => {
    this.name = neme;
    this.age = age;
}

const c = new Cat('애옹스', 2);

console.log(c, c.name, c.age);