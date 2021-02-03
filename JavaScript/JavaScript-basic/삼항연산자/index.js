// condition ? true : false;


// 삼항연산자를 사용하기 전
const array1 = [];
let text1 = '';
if(array1.length === 0){
    text1 = '배열이 비어있다';
} else {
    text1 = '배열이 비어있지 않다';
}

console.log(text1);

// 삼항연산자를 사용한 후
const array2 = [1, 2];
let text2 = array2.length === 0 ?  '배열이 비어있다' : '배열이 비어있지 않다';

console.log(text2);

// 삼항연산자 중첩시켜 사용하기 - 권장하지 않음 차라리 if 문을 사용하자
const condition1 = false;
const condition2 = false;

const value = condition1 
    ? '와우~' 
    : condition2 
        ? 'blabla'
        : 'foo';

console.log(value);