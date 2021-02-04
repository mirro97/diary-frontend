/*
    콜백 지옥....

    function increaseAndPrint(n, callback) {
        setTimeout(() => {
            const increased = n+1;
            console.log(increased);

            if(callback) {
                callback(increased);
            }
        }, 100)
    }



    increaseAndPrint(0, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n =>{
                    increaseAndPrint(n, n =>{
                        console.log('작업 끝');
                    })
                })
            })
        });
    });
*/

// promise를 사용하기!

const myPromise = new Promise((resolve, reject) => {
    /*
        // 1초 뒤에 성공했다면 resolve를 사용
        setTimeout(() => {
            resolve('result');
        }, 1000)
    */
   
    // 1초 뒤에 실패했다면 reject를 사용
    setTimeout(() => {
        reject(new Error());
    }, 1000)
});

// promise가 끝나고 하고 싶은 작업을 then 으로 설정
myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
});