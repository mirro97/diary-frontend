/*
    while (조건) {
        조건이 거짓이 될 때 까지 실행
    }
*/
console.log('while 실행');
//while 무한 루프
while (true) {
    console.log('hello');
    if(Math.random() * 100 > 90) {
        break;
    }
}

/*
    do {
        조건이 거짓이 될 때까지 반복실행
    } while (조건)

    조건을 판단하지 않고 먼저 실행 - 무조건 1번은 실행되게 함
*/
console.log('do-while 실행');

do {
    console.log('hello');
} while(Math.random() * 100 <= 90)