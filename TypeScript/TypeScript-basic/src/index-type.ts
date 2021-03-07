// 속성 이름이 정해져 있지 않고, 동적으로 처리를 해야할때 사용
interface Props {
    // name 은 항상 사용되어야 함
    name: string;
    [key: string]: string;
}

const p: Props = {
    name: "hello",
    a: 'd',
    b: 'e',
    // c: 3 -> 숫자는 불가능!
    c: "3",
    0: "d",
    1: "b"
}

let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser : keyof User;
keysOfUser = "age";

let helloMethod: User["hello"];
