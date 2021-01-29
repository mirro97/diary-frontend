/*
    value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메소드를 실행한다
    value 가 프로미스 객체라면, resolve 된 then 메소드를 실행한다
    value 가 프로미스 객체가 아니라면, value 를 인자로 보내면서 then 메소드를 실행한다
*/

Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아서 then 이 실행된다', data);
});

Promise.resolve('bar').then(data => {
    console.log('then 메소드가 없는 경우, fulfilled 된다', data);
})