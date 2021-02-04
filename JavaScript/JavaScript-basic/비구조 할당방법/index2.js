// 배열 비구조 할당

// 비구조 할당하기 전
const array_1 = [1, 2];

const one_1 = array_1[0];
const two_1 = array_1[1];

console.log(one_1);
console.log(two_1);


// 비구조 할당한 후 
const array_2 = [3, 4];

const [one_2, two_2] = array_2;

console.log(one_2);
console.log(two_2);


// 비구조 할당한 뒤 b 에 기본값 할당하기
const array_3 = [5];

const [one_3, two_3 = 6] = array_3;

console.log(one_3);
console.log(two_3);