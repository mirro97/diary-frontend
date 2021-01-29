/*
    executor 의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있다
    reject('error');
    catch((message) => {...})
*/

function p() {
    return new Promise((resolve, reject) => {
        /* pending 상태 */
        setTimeout(() => {
            reject('error');  /* reject */
        } , 1000);
    });
};

p().then(message => {
    console.log('1000ms 후에 fulfilled 된다', message);
}).catch(reason => {
    console.log('1000ms 후에 rejected 된다', reason);
});

