abstract class vehicle {
  abstract wheels:number;

  start(): void {
    console.log('Brummm');
  }
}

class Car extends vehicle {
  wheels:number = 4;
}

let car = new Car();
console.log(car.wheels);
car.start();

class MotoCycle extends vehicle {
  wheels:number = 2;
}
let motor = new MotoCycle();
console.log(motor.wheels);
motor.start();

