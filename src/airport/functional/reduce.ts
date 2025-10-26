const composeSchedules = <A, B, C>(
    f: Schedule<A, B>,
    g: Schedule<B, C>
): Schedule<A, C> => {
    return (input: A) => g(f(input));
};

/* APPROACH 1st */
const budgetToSeats: Schedule<Money, FlightCapacity> = (money) => {
    // $100 per seats
    return Math.floor(money / 100);
};

const seatsToMaxPassengers: Schedule<FlightCapacity, PassengerCount> = (seats) => {
    // 90% occupation for comfort
    return Math.floor(seats * 0.9);
};

export { budgetToSeats, seatsToMaxPassengers, composeSchedules };

/* APPROACH 2nd */
const scheduleToBoarding: Schedule<FlightMeta, FlightMeta> = (flight) => ({
    ...flight, state: 'boarding'
});

const boardingToDeparted: Schedule<FlightMeta, FlightMeta> = (flight) => ({
    ...flight, state: 'departed'
});

const scheduleToDeparted = composeSchedules(
    scheduleToBoarding, boardingToDeparted
);

export { scheduleToDeparted };