
// 중구난방 늘어놓은 상황
function isAnimal_1(text) {
    return text === '고양이' || text ==='개' || text === '거북이' || text === '늑대';
}

// 해결!
function isAnimal_2(text) {
    const animals = ['고양이', '개', '거북이', '늑대'];
    return animals.includes(text);
}

// 화살표 함수로 바꿔보기 
const isAnimal_3 = (text) => ['고양이', '개', '거북이', '늑대'].includes(text);

console.log(isAnimal_1('개'));
console.log(isAnimal_1('아이패드'));

console.log(isAnimal_2('고양이'));
console.log(isAnimal_2('에어팟'));

console.log(isAnimal_3('늑대'));
console.log(isAnimal_3('맥북에어'));