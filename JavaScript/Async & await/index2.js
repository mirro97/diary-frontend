// 비동기함수
function sleep(ms) {
    // 특정 ms 이후 resolve가 호출되어 Promise 가 끝난다
    return new Promise(reslove => setTimeout(reslove, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await(500);
    return '토끼';
}

const getTurtle = async () => {
    await(3000);
    return '거북이';
}

async function process() {
    /*
        함수 한번에 실행하기
        const dog = await getDog();
        console.log(dog);
        const rabbit = await getRabbit();
        console.log(rabbit);
        const turtle = await getTurtle();
        console.log(turtle);
    */

    // 배열에 Promise.all 을 하여 동시에 실행 가능하게 함
    // 거북이가 끝날때까지 기다렸다가 동시게 출력하므로 총 3초가 걸린다
    const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);

    console.log(result);

    
}

process();