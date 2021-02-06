//  indexOf: 문자열에서 특정 문자열을 찾고,
//           검색된 문자열이 '첫번째' 로 나타나는 위치의 index 리턴
const superHeroes = ['아이언맨', '캡틴아메리카', '토르', '닥터 스트레인지'];

const index1 = superHeroes.indexOf('토르');

console.log(index1);


//  findIndex: 특정조건을 확인해서 조건을 충족하는 원소가 몇번째 인지 알려줌

const todos = [
    {
        id: 1, 
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2, 
        text: '함수 배우기',
        done: true
    },
    {
        id: 3, 
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4, 
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index2 = todos.findIndex(todo => todo.id ===3);

console.log(index2);


//  find: 특정 조건을 만족하는 객체를 찾음

const todo = todos.find(todo => todo.done === false);

console.log(todo);