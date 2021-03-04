class Cart {
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.user.name;
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cartSujeong = new Cart({ name: "sujeong" });
const cartHeyeon = new Cart({ name: "heyeon" });
