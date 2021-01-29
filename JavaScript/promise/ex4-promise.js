/*
    생성자를 통해 프로미스 객체를 만드는 순간 pending (대기) 상태에 돌입하게 된다
*/

new Promise((resolve, reject) => {}); // pending