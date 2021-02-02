// 화살표 함수
/*
    const add = (a, b) => {
        return a+b;
    }
    아래의 함수와 같은 동작을 함
*/
const add = (a, b) => a+b;

const sum = add(1, 2);
console.log(sum);

const hello = name => {
    console.log('hello! ' + name);
}

hello('sujeong');