// spread : 객체 혹은 배열을 펼칠수 있다
// 기존에 만들었던 객체를 참고해서 새로운 객체를 만들고 싶을때 사용
/*
    const slime = {
        name: '슬라임'
    }

    const cuteSlime = {
        name: '슬라임',
        attribute: 'cute'
    }

    const purpleCuteSlime = {
        name: '슬라임',
        attribute: 'cute',
        color: 'purple'
    }

    console.log(slime);
    console.log(cuteSlime);
    console.log(purpleCuteSlime);
*/

// spread 를 사용한 후 : 기존객체를 복사해ㄴ 새로운 객체를 생성함
const slime = {
    name: '슬라임'
}

const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

const greenCuteSlime = {
    // 기존의 color 값을 덮어 쓰게 된다
    ...purpleCuteSlime,
    color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);
