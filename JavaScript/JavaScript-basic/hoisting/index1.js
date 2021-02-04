// hoisting = 아직 선언되지 않은 함수/변수를 끌어올려서 사용하는 작동방식

myFunction();

function myFunction() {
    console.log('hello world!');
}


// var 은 호이스팅이 발생한다!!
// const 와 let 은 호이스팅이 발생하지 않는다!!
console.log(value);

const value = 'im const!';