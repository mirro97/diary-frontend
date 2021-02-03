// continue 조건을 만족했을때 다음 루프로 넘어간다
// break 조건을 만족하면 반복문이 종료된다
for(let i = 0 ; i < 10; i ++){
    if(i ===2 ) continue;
    console.log(i);
    
    if(i ===5 ) break;
}