function createUserActions(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserActions({ name: 'sujeong' }, { do() { } });
function compare(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare(1, 2);
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));
function isAction(v) {
    return v.do !== undefined;
}
function process(v) {
    if (isAction(v)) {
        v.do();
    }
    else {
        console.log(v.name);
    }
}
