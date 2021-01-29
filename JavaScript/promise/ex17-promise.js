/*
    then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현가능하다
    
    아래는 then 에 함수를 넣는 방법들이다
*/

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p().then(() => {
    return p();
})
.then(() => p())
.then(p)
.then(() => {
    console.log('4000ms 후에 fulfilled 된다');
});