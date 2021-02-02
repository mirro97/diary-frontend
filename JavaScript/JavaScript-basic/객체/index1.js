
//객체를 사용하기 전
const dogName  = '멍멍이';
const dogAge = 2;

const Dog = {
    name: '멍멍이',
    age: 2,
    cute: true
};

console.log(Dog.name);
console.log(Dog.age);
console.log(Dog.cute);


const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function printHero({alias, name, actor} ) {
    // const {alias, name, actor} = hero;
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}이다`;
    console.log(text);
}


printHero(ironMan);
printHero(captainAmerica);