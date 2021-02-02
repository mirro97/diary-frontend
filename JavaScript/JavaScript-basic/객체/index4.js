const numbers = {
    _a: 1,
    _b: 2,
    /*
    sum: 3,
    
    calculate(){
        console.log('calculate');
        this.sum = this._a +this._b;
    },
    
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
    */
   get sum(){
       console.log('sum');
       return this._a + this._b;
   }
}

console.log(numbers.sum);
numbers._a = 5;
numbers._b = 7;
numbers._a = 9;
console.log(numbers.sum);