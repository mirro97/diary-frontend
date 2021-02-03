function print(person) {
    // null checking
    // if(person === undefined || peron === null) return;
    if(!person) return;

    console.log(person.name);
}

const person = {
    name: 'sujeong'
};

print(person);


// falsy 한 값과 truthy 한 값
console.log(!undefined);    // true
console.log(!null);         // true
console.log(!0);            // true
console.log(!'');           // true
console.log(!NaN);          // true
console.log(!false);        // true

console.log(!3);            //false
console.log(!'hello');      //false
console.log(!['array']);    //false
console.log(![]);           //false
console.log(!{});           //false