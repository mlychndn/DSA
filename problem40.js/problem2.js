class Car{
    constructor(make, speed){
        this.speed = speed;
        this.make = make;
    }

    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is running at speed of ${this.speed}km/h`);
    }

    brake(){
        this.speed -=5;
        console.log(`${this.make} is running at speed of ${this.speed}km/h`);
    }

    get speedUs(){
        this.speed /=1.6;
        console.log(`${this.make} is at speed of ${this.speed}mi/h`);
    }

    set speedUs(speed){
         this._speed = speed*1.6;
         console.log(`${this.make} spped in mi/h is ${speed} and in km/h is ${this._speed}`);
    }
}

const car1 = new Car('BMW', 120);
console.log(car1);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.speedUs;
car1.speedUs = 120;

console.log(car1);