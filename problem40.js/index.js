'use strict mode'
// 1. classes are not hoisted.
// 2. just like functions, classes are also first class citizines.
// 3. classes are always uesd in strict mode.

// classes can we defined both as declarations or expressions
// expression class =
// const class = Person{
   // constructor(){
//
    //}
//}

// declartion class

class Person {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    getDescription(){
        console.log(`My name is ${this.firstName} & I am ${this.age} years old.`)
    }
}

const malay = new Person('Malay', 28);

console.log(malay);
console.log(malay.__proto__);
console.log(malay.__proto__.__proto__);

malay.getDescription();

console.log(malay.__proto__ === Person.prototype);

Person.prototype.getAddress = function(){
    console.log('Please provide your details')
}

malay.getAddress();