// 표준 내장 객체

const a =  new Array('red', 'black', 'yellow');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red', 'green', 'yellow'];

console.log(b,typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);


console.log(b.slice(0, 1));