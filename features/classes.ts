//blueprint to create an object with some fields and methods to represent something

/*
modifiers are keywords we can place on methods and properties inside of a class.

Public - default. can be called anywhere any time
Private - can only be called by other methods in same class (for ex: deeply alters class, and may not want other devs calling it from outside)
Protected - can be called by other methods in same class AND methods in *child* classes
*/

class Vehicle {
    // color: string;
    // constructor(color: string){
    //     this.color = color;
    // }

    //this "field" equivalent to above code
    constructor(public color: string){

    }
    protected honk(): void {
        console.log("beep");
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

//when overwriting parent class method - cannot change modifier. Could not now make drive private
class Car extends Vehicle {
    //color should not have a modifier because it belongs to parent class vehicle, we do not want to overwrite that
    constructor(public wheels: number, color: string){
        super(color);
    }
    private drive(): void {
        console.log("vroom vroom")
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
