function sleep(ms) {
    // 특정 ms 이후 resolve가 호출되어 Promise 가 끝난다
    return new Promise(reslove => setTimeout(reslove, ms));
}

function makeError() {
    await sleep (1000);
    const error = new Error();
    throw error
}

async function process() {
    // 에러발생시
    try {
        await makeError();
    } catch(e) {
        console.error(e);
    }

    /*
        정상작동

        console.log('안녕하세요');
        await sleep(3000);
        console.log('반갑습니다');
        return true;
    */
}   
// 정상작동
// process().then(value => {
//     console.log(value);
// });