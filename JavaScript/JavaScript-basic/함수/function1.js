// 함수: 특정 코드를 하나의 항목으로 사용할 수 있게 함
function Add(num1, num2) {
    return num1 + num2;
}

const sum = Add(1, 2);
console.log(sum);

function hello(name) {
    // console.log('hello' + name + '!');
    // console.log(`hello ${name}!`);
    return `hello ${name}!`;  // return 이 사용되는 순간 함수는 종료된다
}

hello('sujeong');