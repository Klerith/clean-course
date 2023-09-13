import { Tesla, Audi, Toyota, Honda, Vehicle } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: (Vehicle)[] ) => {
        
        for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getVehicleOfSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getVehicleOfSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getVehicleOfSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getVehicleOfSeats() )
                continue;
            }         

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();