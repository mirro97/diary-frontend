// rest : spread와 비슷하다. 객체, 배열, 함수의 파라미터에서 사용 가능하다 

// 객체에서의 예시

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

// color를 제외한 값을 넣는다. rest는 마음대로 이름을 다르게 지정이 가능하다
const {color, ...cuteSlime} = purpleCuteSlime;

console.log(color);
console.log(cuteSlime);

const {attribute, ...slime} = cuteSlime;
console.log(slime);


// 배열에서의 예시
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

// 배열에서의 rest는 항상 맨 마지막에 위치해야한다
const [...rest, last] = numbers; // error

