// 생성자 함수로 함수를 만드는 방법
// const hello = new Function();
// 선언적 방식이 아니기 때문에 함수가 선언된 것보다 위에서 호출하게 되면 문제가 생긴다!

const sum =  new Function('a', 'b', 'c', 'return a + b +c');

console.log(sum(1, 2, 3));

// function 과 new Function(); 의 차이점

global.a = 0;
{
    const a = 1;

    const test = new Function('return');

    console.log(test());
}

{
    const a = 2;

    const test = function() {
        return a;
    };

    console.log(test());
}