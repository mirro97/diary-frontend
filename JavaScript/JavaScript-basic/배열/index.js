const array = [1, 'yalala', {}, 4, 5];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

const animal = [
    {name: '멍멍이'},
    {name: '야옹이'}
];

console.log(animal[0]);
console.log(animal[1]);

animal.push({
    name: '멍뭉이'
});

console.log(animal);
console.log(animal.length);