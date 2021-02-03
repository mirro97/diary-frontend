// shift: 첫번쨰 원소를 배열에서 앞에서 부터 하나씩 추출해줌

const numbers = [10, 20, 30, 40];

const value = numbers.shift();

console.log(value);
console.log(numbers);


// unshift: 맨 앞에 원소를 추가함

numbers.unshift(5);
console.log(numbers);