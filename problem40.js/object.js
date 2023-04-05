// const carProto = {
//     accelarate(){
//         this.speed = this.speed + 10;
//         console.log(`${this.make} is running at ${this.speed}km/h`);
//     },

//     brake(){
//         this.speed = this.speed - 5;
//         console.log(`${this.make} is running at ${this.speed}km/h`);
//      },

//      init(make, speed){
//          this.make = make;
//          this.speed = speed;
//        }
// }

// const car1 = Object.create(carProto);
// car1.init('BMW', 120);

// const car2 = Object.create(carProto);
// car2.init('Audi', 200);

// console.log(car1);
// car1.accelarate();
// car1.brake();

// car2.accelarate();
// car2.brake();

function a() {
  c();
  function c() {
    console.log(b);
  }
}

a();
var b = 10;
