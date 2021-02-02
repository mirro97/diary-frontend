// 대입 연산자
let num =1
num += 3;
num -= 3;
num *= 3;
num /= 3;

// 논리 연산자 boolean
let value = true;
value = false;

    // NOT !    
    const a = !false;

    // AND &&
    const b = true && true; // true
    const c = false && true; // false
    const d = true && false; // false
    const e = false && false; // false

    // OR ||
    const f = true && true; // true
    const g = false && true; // true
    const h = true && false; // true
    const i = false && false; // false

// 비교 연산자
const value1 = 1;
const value2 = 2;
const value3 =3
const equals = value1 === value2;   // === 가 정확한 검사를 하기 때문에 주로 사용한다
// const equals = value1 == value2;  

console.log( value1 < value2);
console.log( value2 > value1);
console.log( value1 <= value3);
console.log( value3 >= value2);

// 문자열 합치기
const text1 = '안녕';
const text2 = '하세요';
console.log(text1 + text2); // 안녕하세요

