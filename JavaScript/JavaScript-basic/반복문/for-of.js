// for-of 반복문: 배열을 사용함

const numbers = [10, 20, 30, 40, 50];

for(let num of numbers){
    console.log(num);
}

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// for-in 반복문: 객체에 대한 반복적인 작업을 처리

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.keys(doggy));    // 왼쪽의 값을 보여줌

console.log(Object.values(doggy));  // 오른쪽의 값을 보여줌

console.log(Object.entries(doggy)); // 배열형태로 key와 value를 반환함


// key 값만 볼때
for(let key in doggy){
    console.log(key);
}


// key와 value 값을 같이 볼때
for(let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}