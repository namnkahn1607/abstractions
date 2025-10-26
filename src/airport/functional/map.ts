// APPROACH 1st
type Money = number;
type PassengerCount = number;
type FlightCapacity = number;

type Schedule<A, B> = (input: A) => B;

// APPROACH 2nd
type FlightState = 'scheduled' | 'boarding' | 'departed';

type FlightMeta = {
    id: string;
    state: FlightState,
    passengerIds: string[],
};