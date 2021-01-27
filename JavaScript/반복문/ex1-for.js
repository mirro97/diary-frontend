/*
for (초기화; 반복조건; 반복이 된 후 실행되는 코드) {
    반복이 되는 코드 블럭;
 }
*/

for (let i = 0; i < 5; i ++){
    console.log('안녕하세용', i);
}

for (let i = 0, j = 5; i < 5; i ++){
    console.log('안녕하세용', i, j);
}

for (let i = 0, j = 5; i < 5; i ++, j = j * j){
    console.log('안녕하세용', i, j);
}

// 반복문을 즉시 종료하고 싶을때 반복되는 블럭안에서 break;를 실행하면 된다.
for (let i = 0; i < 5; i++){
    console.log(i);
    if(i > 2){
        break;
    }
    console.log('안녕하세요', i);
}

// 반복되는 블럭 안에서 continue; 를 만나면 거기서 바로 해당 블럭는 종료
// 다음 반복이 있다면 다음 반복으로 넘어간다
for (let i = 0; i < 5; i++){
    console.log(i);
    if(i > 2){
        continue;
    }
    console.log('안녕하세요', i);
}

// for(;;) { d } d가 계속 반복되게 된다 = 무한루프
for(;;) {
    console.log('안녕하세요');

    //랜덤한 값에 의해 종료된다
    if(Math.random() * 100 > 90) {
        break;
    }
}