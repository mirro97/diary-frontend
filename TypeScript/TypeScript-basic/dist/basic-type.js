let numValue;
let stringValue;
let boolenValue;
let undefinedValue;
let nullValue;
let objValue;
let symbolValue;
let anyValue;
numValue = 3.7;
stringValue = "hi";
stringValue = 'hi';
stringValue = `
    여러줄에 걸쳐
    사용할 
    수 있다
    ${1 + 1}
`;
console.log(stringValue);
boolenValue = true;
undefinedValue = null;
anyValue = null;
anyValue = undefined;
anyValue = 3;
anyValue = {};
objValue = {};
objValue = { name: 'su' };
objValue = new String(33);
symbolValue = Symbol();
let nameList;
nameList = ['sujeong', 'heyeon'];
nameList.push("222");
console.log(nameList);
let user1;
user1 = {
    name: 'su',
    score: 80
};
let tuple2;
tuple2 = [1, "su"];
let tuple3;
tuple3 = [1, "su", 43];
