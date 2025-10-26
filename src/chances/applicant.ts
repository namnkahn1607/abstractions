export class Applicant {
    constructor(
        public readonly id: number,
        private readonly skillRate: number = 100 * Math.random(),
        private readonly luckRate: number = 100 * Math.random()
    ) {}

    public calcGraduateScore() {
        return this.skillRate * 0.95 + this.luckRate * 0.05;
    }

    public getLuckRate() {
        return this.luckRate;
    }
}