// reduce: 배열안에 있는 모든 값들을 사용하여 연산할때 사용

const numbers = [1, 2, 3, 4, 5];

// 방법 1:  배열 안의 모든 값 더하는 함수
let sum1 = 0;
numbers.forEach(n => {
    sum1 += n;
})

console.log(sum1);

// 방법 2: reduce() 사용하기
// accumulator = 누적된 값 , 0은 accumulator의 초기값, current는 각 원소들을 앞에서부터 가리킨다
const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum2);


// 방법 3: index와 array 추가하기
// index = 각 원소가 몇번째인지 알려줌, array = 함수를 실행하는 배열(=numbers)
const sum2 = numbers.reduce((accumulator, current, index, array) =>{
    
    // 현재 처리하고 있는 원소가 맨 마지막것 이라면
    // 이때 -1 은 현재 배열의 크기에서 -1을 해야 마지막 원소의 index 인 4를 가리킬수 있기 때문에 사용한다
    if(index === array.length - 1){

        // 평균을 계산
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
});
console.log(sum2);
