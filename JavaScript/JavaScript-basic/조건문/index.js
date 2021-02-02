// 특수한 조건에 특정 상황을 실행하게 함
const a = 1;

if (a + 1 === 2){
    const a = 2;
    console.log('if 문 안의 a 값은 ' + a);
}
console.log('if 문 밖의 a 값은 ' + a);

const b = 10;

if(b > 15) {
    console.log('b 가 15보다 크다');
} else {
    console.log('b 가 15보다 크지 않다')
}

const c = 7;

if(c === 5){
    console.log('c 는 5 이다');
} else if (c === 10){
    console.log('c 는 10 이다');
} else if (c === 7){
    console.log('c 는 7 이다');
} else {
    console.log('c 는 5 도, 7 도, 10 도 아니다');
}

// switch case 문: 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을때 사용
const device = 'iphone';

switch(device) {
    case 'iphone': 
        console.log('아이폰 입니당');
        break;
    case 'ipad':
        console.log('아이패드 입니당');
        break;
    case 'galaxy': 
        console.log('갤럭시 입니당');
        break;
    default:
        console.log('모르겠슴당');
}
