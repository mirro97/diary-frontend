// splice: 배열에서 특정 항목을 제거한다

const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);

// numbers.splice(index, 1);   // index 부터 원소를 1개 제거한다 + 제거해낸 배열들을 의미
//numbers.splice(index, 2);   // index 부터 원소를 2개 제거한다 + 제거해낸 배열들을 의미

const spliced = numbers.splice(index, 2);
console.log(spliced);
console.log(numbers);