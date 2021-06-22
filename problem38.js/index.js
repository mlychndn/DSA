const Person = function(name, age){
    this.name = name;
    this.age = age;

  // never defined method inside constructor function.  
    //this.getDescription = function(){
       // return(`My name is ${this.name} and I am ${this.age} years old`)
    //}
}

const malay = new Person('Malay Chandan', 28);
const tithi = new Person('Suriya Ghosh', 25);
const suman = new Person('Malay Suman', 32);

console.log(malay);
console.log(tithi);
console.log(suman);

Person.prototype.getDescription = function(){
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
}

Person.prototype.species = 'Homo sapiens';
malay.getDescription();
console.log(malay);
tithi.getDescription();

console.log(malay.species);
console.log()

console.log(malay.__proto__.__proto__ === Object.prototype);

console.log(Person.prototype.isPrototypeOf(malay));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.constructor);


const arr = [3,6,6,5,6,9,9];
 console.log(arr);

 const newArr = arr.map(el=> el*2);
 console.log(newArr);

 Array.prototype.unique = function(){
     return [...new Set(this)]
 }

 console.log(arr.unique());
 console.log(arr);

 const arr1 = [5,5,5,5,5,6,5,6,77,77]
 console.log(arr1.unique());
 

