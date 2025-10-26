/* airport as objects with methods representing their behaviors */

import { Flight } from './flight.ts';
import { Passenger } from './passenger.ts';

class Airport {
    flights: Array<Flight> = [];

    constructor(public name: string = 'Anonymous') {}

    addFlight(flight: Flight) {
        this.flights.push(flight);
    }

    public static run() {
        const airport = new Airport('Melbourne');
        const flight = new Flight('A224', 'SF');
        const harry = new Passenger('P2402', 'Harry');

        airport.addFlight(flight);
        flight.boardPassenger(harry);
        console.log(harry.getName(), 'is now at', harry.getLocation());

        flight.depart();
        console.log(harry.getName(), 'is now at', harry.getLocation());
    }
}

Airport.run();