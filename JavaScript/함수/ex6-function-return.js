// 함수를 호출하면 함수를 만들어 리턴

function plus(base) {
    return function (num) {
        return base + num;
    }
}

const plus5 = plus(5);

console.log(plus5(10));


const plus7 = plus(7);

console.log(plus7(8));

// 함수를 인자로 하여 함수를 호출

function hello(c) {
    console.log('hello');
    c();
}

hello(function () {
    console.log('콜백');
});