const dog = {
    name: '멍멍이'
};

function getName(animal) {
    /*
        단축하기 전

        if(animal) {
            return animal.name;
        }
        return undefined;
    */
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);