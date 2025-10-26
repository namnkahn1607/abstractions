class Passenger {
    constructor(
        public id: string,
        private name: string,
        private location: string = 'home',
    ) {}

    travelTo(destination: string) {
        this.location = destination;
    }

    getName() {
        return this.name;
    }

    getLocation() {
        return this.location;
    }
}

export { Passenger };