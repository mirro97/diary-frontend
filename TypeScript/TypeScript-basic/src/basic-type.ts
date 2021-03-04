let numValue: number;
let stringValue: string;
let boolenValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3.7;
stringValue = "hi";
stringValue = 'hi';
stringValue = `
    여러줄에 걸쳐
    사용할 
    수 있다
    ${1+1}
`;

console.log(stringValue);

boolenValue = true;
undefinedValue = null;

anyValue = null;
anyValue = undefined;
anyValue = 3;
anyValue = {};

objValue = { };
objValue = {name: 'su'};
objValue = new String(33);

// symbol 은 함수로만 생성할 수 있다
symbolValue = Symbol();


// 문자열과 숫자 섞어 사용하고 싶다면 type을 any 로 설정해주면 된다
let nameList: string[];
nameList = ['sujeong', 'heyeon'];
nameList.push("222");

console.log(nameList);

let user1: {name: string, score: number};
user1 = {
    name: 'su',
    score: 80
}

let tuple2: [number, string];
tuple2 = [1, "su"];

let tuple3: [number, string, number];
tuple3 = [1, "su", 43];