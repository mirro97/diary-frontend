// 익명 function
//이름이 hello1 인 함수를 선언
function hello1() {
    console.log('hello1');
}

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정
function hello2 (name) {
    console.log('hello2', name);
}


// 함수의 리턴
// 함수를 실행하면 얻어지는 값
function hello3 (name) {
    return `hello3 ${name}`;
}

console.log(hello3('Mark'));

//const hello = function () { }
// 이름이 hello4 인 함수를 선언
const hello4 = function () {
    console.log('hello4');
}

console.log(hello4, typeof hello4);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정
const hello5 = function (name) {
    consol.log('hello5', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
const hello6 = function (name) {
    return `hello6, $(name)`;
}

