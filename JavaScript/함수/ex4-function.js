// arrow function
// arrow 함수를 만들어 이름이 hello1 인 변수에 할당
// 항상 익명함수로써 특정 변수에 할당하여 사용하는 것
const hello1 = () => {
    console.log('hello1');
} 

// 함수의 매개 변수
// 함수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name => {
    console.log('hello2', name);
};

const hello3 = (name , age) => {
    console.log('hello3', name, age);
};


// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello4 = name => {
    return `hello4 ${name}`;
};

const hello5 = name => `hello5 ${name}`;