interface User {
    name: string;
}

interface Product{
    id: string;
    price: number;
}

class Cart{
    // protected user: User;
    private store: object;

    constructor(public user: User){
       //  this.user = user;
        this.store = {};
    }
    put(id: string, product: Product) {
        this.user.name;
        this.store[id] = product;
    }
    get(id: string){
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion(){
        this.user
    }
}

const cartSujeong = new Cart({name: "sujeong"});
const cartHeyeon = new Cart({name: "heyeon"});