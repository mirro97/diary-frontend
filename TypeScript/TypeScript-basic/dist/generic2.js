class D {
    add(v) {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
class LocalDB {
    constructor(localStroageKey) {
        this.localStroageKey = localStroageKey;
    }
    add(v) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const myCart = {
    getItem() {
        return {
            v: ''
        };
    }
};
myCart.getItem();
