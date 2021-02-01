/* 
    let을 사용해 변수를 선언
    이때 이미 선언된 변수의 이름으로 다시 선언이 불가능하다
 */
let value  = 1; 

console.log(value);

value = 2;  // 가능

console.log(value);

let value = 3;  // 불가능

console.log(value);


/*
    const 를 사용해 상수를 선언
    값이 고정적임 = 변경할 수 없음
*/
const a = 1;

a= 3; // 불가능

/* 
    var 을 사용해 변수를 선언 -> 권장하지 않음
    같은 이름으로 여러번 선언이 가능함 = 더이상 사용하지 않음
*/
var b = 1;
var b = 2; //가능


/*
    문자열 선언
    '따옴표'와 "쌍따옴표"는 취향차이! 마지막에 붙이는 세미콜론도 취향차이!
*/
let text = 'hello';
let txt = "hello";

/*
    boolean
*/
let good = true;
let bad = false;

let nothing = null; // 값이 없다
let something = undefined; // 값이 아직 정해지지 않았다

