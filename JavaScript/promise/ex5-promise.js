/*
    executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다
*/

new Promise((resolve, reject) => {
    // pending 상태 돌입

    // ... 비동기적인 상황이 일어나는 중 -> pending 상태 지속

    resolve(); // fulfilled 상태
});