/*
    executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 된다
    문제상황이 발생하게 된다면 reject() 함수 호출
*/

new Promise((resolve, reject) => {
    // pending 상태 돌입

    // ...

    reject(); // rejected 상태
});