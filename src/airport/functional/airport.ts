/* airport as a transformation pipeline and compositions of functions */

import {
    budgetToSeats, composeSchedules,
    seatsToMaxPassengers, scheduleToDeparted
} from './reduce.ts';

/* APPROACH 1st */
const airportFunctional = (availableMoney: Money) => {
    const moneyToMaxPassengers = composeSchedules(
        budgetToSeats, seatsToMaxPassengers
    );

    const maxPassengers = moneyToMaxPassengers(availableMoney);
    console.log(`$${availableMoney} -> ${maxPassengers} max passengers`);

    const canBook = (requests: PassengerCount): boolean => {
        return requests <= maxPassengers;
    };

    return { canBook, maxPassengers };
};

const airportSystem = airportFunctional(50000); // $50,000 budget

const attempts = [300, 450, 500].map((requests) => airportSystem.canBook(requests));
console.log(attempts);

/* APPROACH 2nd */
const initialFlight: FlightMeta = {
    id: "F100",
    state: "scheduled",
    passengerIds: ["P1", "P2"]
};

const departedFlight = scheduleToDeparted(initialFlight);

console.log(`Flight went from "${initialFlight.state}" → "${departedFlight.state}"`);