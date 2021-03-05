interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
}

interface JSONSerialier {
    serialize(): string;
}

class LocalDB<T extends JSONSerialier> implements DB<T>{
    constructor(private localStroageKey: string){
    }   
    add(v: T){
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get(): T{
        const v = localStorage.getItem(this.localStroageKey);
        return (v)? JSON.parse(v) : null ;
    }
}

// 조건부 타입 -> generic에서 활용하기
interface Vegitable{
    v: string;
}

interface Meat{
    m: string;
}

interface MartCart<T>{
    getItem(): T extends Vegitable ? Vegitable : Meat;
}

const myCart: MartCart<Vegitable> = {
    getItem() {
        return {
            v: ''
        }
    }
}

myCart.getItem();