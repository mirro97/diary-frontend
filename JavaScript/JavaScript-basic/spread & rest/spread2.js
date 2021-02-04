// 배열에서의 spread 사용
const animals = ['개', '고양이', '코끼리'];
const addAnimals = [...animals, '닭'];

console.log(animals);
console.log(addAnimals);


const numbers = [1, 2, 3, 4, 5];
const addNumbers = [...numbers, 1000, ...numbers];

console.log(numbers);
console.log(addNumbers);