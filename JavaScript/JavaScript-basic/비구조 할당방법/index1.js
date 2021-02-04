// 비 구조화 할당 방법 1
const object1 = {a1: 1, b1: 2};
const {a1, b1} = object1;

console.log(a1);
console.log(b1);

// 비 구조화 할당 방법 2-1 : 파라미터
const object2 = {a2: 3, b2: 4};

function print2({a2, b2}) {
    console.log(a2);
    console.log(b2);
}

print2(object2);

// 비 구조화 할당 방법 2-2 : 파라미터 - 함수에서 기본값을 제공하려면 '=' 을 사용한다!
const object3 = {a3: 5};

// b의 기본값을 4로 제공한다
function print3({a3, b3 = 6}) {
    console.log(a3);
    console.log(b3);
}

print3(object3);

// 비 구조화 할당 방법 3 : 기본값을 제공하는 다른 방법
const object4 = {a4: 7};

const {a4, b4 = 8} = object4;
console.log(a4);
console.log(b4);

// 비 구조화 할당 방법 4 : 이름을 바꾸는 방법
const animal = {
    name:'멍멍이',
    type: '개'
};

//     기존이름: 새로 짓고싶은 이름
const {name: nickname} = animal;
console.log(nickname);