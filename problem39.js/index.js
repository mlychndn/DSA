/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the
current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on ecah of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA car 2: 'Merceds' going at 95 km/h
*/

function Car(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed}km/h`)
}

Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed}km/h`)
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Merceds', 95);

console.log(`${car1.make} going at ${car1.speed}km/h`);
console.log(`${car2.make} going at ${car2.speed}km/h`);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();