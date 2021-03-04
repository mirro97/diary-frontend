var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer(){
    if(true){
        // var score = 0;

        // score의 타입을 number로 고정시킴
        let score: number = 0;
        score = 30;
    }

    for(let i = 0; i < 3; i++){
        setTimeout(function(){
            console.log(i);
        }, 100);
    }

    // const 선언시 초기값을 무조건 채워줘야함
    if(true){
        const score = 100;  // 초기값이 100이라고 설정되어있어 :number 를 붙여주지 않아도 된다
        // score = 30;  상수이기때문에 재할당이 안된다!
    }

}

outer();