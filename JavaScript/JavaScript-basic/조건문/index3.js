// 주어진 값에 따라 다른 결과물을 반환해야 하는 상황

// 방법 1 : if문 나열
function getSound1(animal) {
    if(animal === '개') return '멍멍';
    if(animal === '고양이') return '애옹';
    if(animal === '참새') return '짝짝';
    if(animal === '거북이') return '거부욱';
    return '..?';
}

console.log(getSound1('개'));


// 방법 2: switch 문 사용
function getSound2(animal) {
    switch(animal){
        case '인간': return '왜';
        case '고양이': return '애옹';
        case '참새': return '짝짝';
        case '거북이': return '거부욱';
        default: return '...?';
    }
}

console.log(getSound2('거북이'));

// 방법 3: 객체를 활용하기
function getSound3(animal) {
    const sound = {
        // key : value
        개: '멍멍',
        고양이: '애옹',
        인간: '왜',
        거북이: '거부욱'
    }
    // 대괄호 안에 파라미터로 받아온 key 값을 넣어주면 각 value를 받아올수 있다
    return sound[animal] || '...?';
}

console.log(getSound3('코끼리'));

// 방법 4: 주어진 특정한 값으로 다른 코드를 실행하고자 할 때
function makeSound(animal) {
    const tasks = {
        // 화살표 함수 쓰기
        개: () => {
            console.log('멍멍');
        },
        // 메소드로 선언하기 -> 권장하는 방법!!
        고양이() {
            console.log('애옹애옹');
        },
        //function 으로 선언하기
        거북이: function () {
            console.log('거부욱');
        }
    }
    
    const task = tasks[animal];
    if(!task){
        console.log('...?');
        return;
    }
    task();
}

makeSound('고양이');