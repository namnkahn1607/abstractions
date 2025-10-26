type PassengerData = {
    id: string,
    name: string,
    flightId: string,
};

type FlightData = {
    id: string,
    destination: string,
    passenger: string[],
};

type BookingDatabase = {
    passengers: PassengerData[],
    flights: FlightData[],
};