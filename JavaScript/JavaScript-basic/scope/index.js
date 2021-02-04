/*
    scope = 변수/함수를 선언하게 될때 어디서 어디까지 유효한지에 대한 범위
    global-scope (전역): 코드의 모든 범위에서 사용 가능하다
    function-scope: 특정 함수 내부에서만 사용 가능하다
    block-scope: if 문, for 문, switch 문 같이 중괄호로 감싸진 블록 내부에서만 사용 가능하다
 */

 const value = 'hello!';

 function myFunction() {
    const myValue = 'oh!'
    const anotherValue = 'world!';
     console.log('myFunction: ');
     console.log(myValue);

     function functionInside () {
         console.log('functionInside: ');
         console.log(value);
         console.log(anotherValue);
     }
     functionInside();
 }

 function otherFunction() {
     console.log('otherFunction: ');
     const value = 'bye!';
     console.log(value);
 }

 myFunction();
 otherFunction();

 console.log('global scope: ');
 console.log(value);
 console.log(anotherValue);