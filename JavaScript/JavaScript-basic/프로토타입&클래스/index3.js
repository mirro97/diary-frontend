class Food {
    constructor(name){
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand);
    }
    print(){
        console.log(`${this.name} 을/를 파는 음직점들`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('알볼로');
pizza.addBrand('도미노피자');

const chicken = new Food('치킨');
chicken.addBrand('교촌치킨');
chicken.addBrand('BBQ');
chicken.addBrand('호식이');

pizza.print();
chicken.print();