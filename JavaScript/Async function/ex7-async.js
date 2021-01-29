function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

// Promise - 만들어서 리턴하고 체이닝

p(1000)
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
      console.log('3000ms 후에 실행');
});

// async await - 한줄 한줄이 비동기가 끝나면 진행: 로직의 이동의 파악에 용이하다

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후에 실행');
})();