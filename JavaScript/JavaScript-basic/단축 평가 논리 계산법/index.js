console.log(true && 'hello'); // 앞이 true 라면 연산 결과는 뒤에 오는것이 된다
console.log(false && 'hello'); // 앞이 false 라면 연산결과는 false

console.log('hello' && 'bye'); // 결과는 bye
console.log(null && 'hello');  // 결과는 null
console.log(undefined && 'hello');  // 결과는 undefined
console.log('' && 'hello');    // 결과는 ''
console.log(0 && 'hello');    // 결과는 0
console.log(1 && 'hello');     // 결과는 hello


// && 연산자 사용: 특정값이 유효할 때만 어떤 값을 조회하는 상황에 사용한다
const object = null;

const value = object && object.name;
console.log(value);  // 에러가 나지 않고 코드가 실행된다! 


// || 연산자 사용: 만약 어떤 값이 falsy 하다면 대체로 지정해 줄 값을 지정해줄수 있다
const namelessDog = {
    name: '',
}

function getName(animal) {
    const name = animal && animal.name;
    /*
        || 연산자 사용하기 전
        
        if(!name) {
            return '이름이 없는 동물입니다';
        }
        return name;
    
    */

   // || 연산자 사용후
   return name || '이름이 없는 동물입니다';
}

const dogName = getName(namelessDog);
console.log(dogName);