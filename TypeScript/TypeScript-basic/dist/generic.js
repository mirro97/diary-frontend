function createPromise(x, timeoute) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    });
}
createPromise("1", 100).then(v => console.log(v));
function createTuple2(v, v2) {
    return [v, v2];
}
function createTuple3(v, v2, v3) {
    return [v, v2, v3];
}
const t1 = createTuple2("user2", 1000);
