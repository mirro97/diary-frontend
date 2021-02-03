function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    
}

// prototype : 객체생성자로 객체를 만들었을때 값이나 함수를 공유할수 있게 함
Animal.prototype.say = function () {
    console.log(this.sound);
}

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Animal('개', '멍멍이', '멍멍');

const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();