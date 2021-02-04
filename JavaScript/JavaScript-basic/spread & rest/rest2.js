// 함수 파라미터에서의 rest

// ...rest 를 사용하게 되면 입력된 파라미터를 전부 하나의 배열로 받을수 있음
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));