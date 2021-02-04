// 함수의 인자에서 spread를 사용하는 법

/*
    // x 와 y 는 <파라미터> : 함수에서 받아오는 값
    function subtract(x, y) {
        return x - y;
    }

    // 1 과 2는 <인자> : 함수를 사용할때 넣어주는 값
    const result = subtract(1, 2);
*/

function subtract(x, y) {
    return x - y;
}

const numbers_subtract = [1, 2];
const result = subtract(...numbers_subtract);

console.log(result);


function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers_sum = [1, 2];
console.log(sum(...numbers_sum));