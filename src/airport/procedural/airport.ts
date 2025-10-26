/* airport as a series of processes operating on data structures */

function airportProcedural() {
    const bookings: BookingDatabase = {
        passengers: [],
        flights: [],
    };

    function addPassenger(id: string, name: string, flightId: string) {
        bookings.passengers.push({ id, name, flightId });

        const flight = bookings.flights.find(f => f.id === flightId);

        if (flight) {
            flight.passenger.push(id);
        }
    }

    function registerDeparture(flightId: string) {
        const index = bookings.flights.findIndex(f => f.id === flightId);

        if (index !== -1) {
            bookings.flights.splice(index, 1);
            bookings.passengers.filter((p) => p.flightId === flightId);
        }
    }

    return { addPassenger, registerDeparture, bookings };
}

const proc = airportProcedural();
proc.addPassenger('P2402', 'Harry', 'A224');

console.log('Passengers:', proc.bookings.passengers);