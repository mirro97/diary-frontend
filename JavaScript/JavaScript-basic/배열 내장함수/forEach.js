const superHeroes = ['아이언맨', '캡틴아메리카', '토르', '닥터 스트레인지'];

/*
    1번째 방법

    for(let i = 0; i < superHeroes.length; i ++){
        console.log(superHeroes[i]);
    }
*/

/*
    2번째 방법: forEach 사용하기

    function printHero(hero) {
        console.log(hero);
    }

    superHeroes.forEach(printHero);
*/

/*
    3번째 방법: forEach 축약하기

    superHeroes.forEach(function printHero(hero) {
    console.log(hero);
    });
*/


// 4번째 방법: 화살표 함수 사용하기
superHeroes.forEach(hero => {
    console.log(hero);
});

