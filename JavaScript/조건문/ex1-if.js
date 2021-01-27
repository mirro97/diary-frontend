/*
if (표현식) {
    표현식이 참으로 평가될 떄, 실행되는 문장들의 모음
}
*/

if(true) {
    console.log('true! 항상 실행합니다');
}

if(false) {
    console.log('false! 항상 실행되지 않습니다');
}

// 불록에 코드가 한줄이면, 중괄호 {} 는 생략이 가능하다!
if(true) console.log('블록에 코드가 한줄일때, true 면 중괄호없어도 실행!');

if(false) console.log('항상 실행되지 않음!');

//표현식 예제 - FALSE 일때
if (false) console.log(false);
if (0) console.log(false);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

//표현식 예제 - TRUE 일때
if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if ({}) console.log({});
if ([]) console.log([]);