/* 
    async funtion 에서 return 되는 값은
    Promise.resolve 함수로 감싸서 리턴된다
*/

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve();
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    return 'SJ';
}


(async function main() {
    try {
        const name = await asyncP(1000);
        console.log(name);
    } catch {
        console.log(error);
    }
})();
