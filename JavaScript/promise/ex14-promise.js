/*
    보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장객체인 Error 의 생성자를 이용해 Error 객체를 만든다
*/

function p() {
    return new Promise((resolve, reject) => {
        /* pending 상태 */
        setTimeout(() => {
            reject(new Error('bad'));  /* reject */
        } , 1000);
    });
};

p().then(message => {
    console.log('1000ms 후에 fulfilled 된다', message);
}).catch(error => {
    console.log('1000ms 후에 rejected 된다', error);
});

