function add(x, y) {
    return x + y;
}
const result = add(12, 34);
console.log(result);
function buildUserInfo1(name, email) {
    return { name, email };
}
const user = buildUserInfo1();
function buildUserInfo2(name = "-", email = "-") {
    return { name, email };
}
const user2 = buildUserInfo2();
const add2 = (a, b) => a + b;
function store(type) {
    if (type === "통조림") {
        return { notVeryCold: "통조림" };
    }
    else if (type === "아이스크림") {
        return { VeryCold: "아이스크림" };
    }
    else {
        throw new Error('unsupported type');
    }
}
const s = store('아이스크림');
s.VeryCold;
