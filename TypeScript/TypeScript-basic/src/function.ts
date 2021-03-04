function add(x: number, y: number): number {
    return x+y;
}

// add(23, "54");

const result = add(12, 34);
console.log(result);

function buildUserInfo1(name?: string, email?: string) {
    return {name, email};
}
const user =  buildUserInfo1(); // name과 email을 옵션화 시켰기 때문에 아무 값을 주지 않아도 된다

// name과 eamil 에 기본값을 할당
function buildUserInfo2(name = "-", email="-") {
    return {name, email};
}
const user2 =  buildUserInfo2();

// 화살표 함수 사용하기
const add2 = (a: number, b: number) => a + b;

interface Storage {
    notVeryCold: string;
}
interface ColdStorage {
    VeryCold: string
}
// 문자열을 type anotation 으로 정의할 수 있다
function store(type: "통조림"):Storage
function store(type: "아이스크림"): ColdStorage

function store(type: "통조림" | "아이스크림") {
    if(type === "통조림"){
        return { notVeryCold: "통조림" }
    } else if( type === "아이스크림") {
        return { VeryCold: "아이스크림"}
    } else {
        throw new Error('unsupported type');
    }
}

const s = store('아이스크림');
s.VeryCold;