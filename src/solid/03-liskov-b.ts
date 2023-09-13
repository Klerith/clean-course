//sirven para para trabajar con herencias
export abstract class Vehicle{
    abstract getVehicleOfSeats(): number;
}




export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getVehicleOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getVehicleOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getVehicleOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda  extends Vehicle{ 

    constructor( private numberOfSeats: number ) {
        super();
    }

    getVehicleOfSeats() {
        return this.numberOfSeats;
    }
}
