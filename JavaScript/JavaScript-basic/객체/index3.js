// getter 함수

const numbers = {
    a:1,
    b: 2,
    get sum(){
        console.log('sum 함수가 실행됩니다!');
        return this.a +this.b;
    }
}

// sum()이라 안하고 sum 만 작성함. 특정 값을 조회하려할때 연산된 값을 받아서 사용함
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);


// setter 함수

const dog = {
    _name: '멍멍이',
    get name(){
        console.log('_name을 조회합니다...');
        return this._name;
    },
    set name(value) {
        this._name = value;
        console.log('이름이 바뀝니다...' +  value);
    }
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);