// 함수의 기본 파라미터 생성도 가능하다!


// 방법 1
function calculateCircleArea1(r) {
    // r 이 없다면 1 을 기본값으로 사용한다
    const radius = r || 1;

    return radius * radius * Math.PI;
}

const area1 = calculateCircleArea1();

console.log(area1);

// 방법 2-1 : ES6 문법
// 기본값을 1 로 지정
function calculateCircleArea2(r = 1) {
    return r * r * Math.PI;
}

const area2 = calculateCircleArea2();

console.log(area2);

// 방법 2-2 : 화살표 함수에서의 사용
const calculateCircleArea3 = (r = 1) => r * r * Math.PI;

const area3 = calculateCircleArea3();

console.log(area3);