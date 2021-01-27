var hello2;
console.log(hello2);

hello1();
//hello2();
hello3();


// 선언적 함수
function hello1() {
    console.log('hello1');
}

// 익명함수 변수에 할당하여 사용하기 - var로 변수를 선언
hello2  = function () {
    console.log('hello2');
}

// 익명함수 변수에 할당하여 사용하기 - const로 변수를 선언
const hello3 = function() {
    console.log('hello3');
}