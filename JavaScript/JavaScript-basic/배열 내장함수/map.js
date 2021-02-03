// map 함수: 배열 안의 원소를 변환할때 사용

const array = [1, 2, 3, 4, 5, 6, 7, 8];

/*
    1번쨰 방법
    const squared = []; 

    for(let i = 0; i < array.length; i ++){
    squared.push(array[i] * array[i]);
    }

    console.log(squared)
*/


/*
    2번째 방법: 화살표 함수 사용하기
    const squared = [];
    
    array.forEach(num => {
        squared.push(num * num);
    });

    console.log(squared);
*/


// 3번째 방법: map을 사용하기
const squareMap = n => n * n;
const squared = array.map(squareMap);

console.log(squared);


const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];


const texts = items.map(item => item.text);
console.log(texts);