import { Passenger } from './passenger.ts';

class Flight {
    passengers: Array<Passenger> = [];

    constructor(
        public id: string,
        public destination: string,
        public location: string = 'gate',
    ) {}

    boardPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
        passenger.travelTo(`flight-${this.id}`);
    }

    depart() {
        this.location = this.destination;
        this.passengers.forEach(p => p.travelTo(this.destination));
    }
}

export { Flight };