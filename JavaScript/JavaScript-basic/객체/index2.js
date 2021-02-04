const dog = {
    name: '멍멍이',
    sound: '멍멍!',

    // 화살표 함수를 사용하면 내부에서 this를 인식하지 못해 사용 불가!
    say : function () {
        console.log(this.sound);
    }
};

dog.say();


const cat = {
    name: '야옹이',
    sound: '야옹!',

};

cat.say = dog.say;

cat.say();