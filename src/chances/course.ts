import { Applicant } from "./applicant";
import { MaxPriorityQueue } from "datastructures-js";

const MIN_NUMBER_OF_APPLICANTS = 10;

export class Course {
    private readonly applicantRank: MaxPriorityQueue<Applicant>;
    public readonly graduateSlots: number;

    constructor(numOfApplicants: number, graduateSlots: number) {
        if (numOfApplicants <= 0 || graduateSlots < 0 || numOfApplicants < graduateSlots)
            throw new Error("invalid arguments");

        if (numOfApplicants < MIN_NUMBER_OF_APPLICANTS)
            throw new Error("insufficient amount of applicants");

        this.graduateSlots = graduateSlots;

        this.applicantRank = new MaxPriorityQueue<Applicant>((
            person => person.calcGraduateScore()
        ));

        for (let i = 1; i <= numOfApplicants; ++i) {
            const newApplicant = new Applicant(i);
            this.applicantRank.enqueue(newApplicant);
        }
    }

    public pullTop(): Applicant[] {
        const topTen: Applicant[] = [];

        for (let i = 0; i < this.graduateSlots; ++i)
            topTen.push(this.applicantRank.dequeue()!);

        return topTen;
    }

    public calcAverageLuckRate(topGrad: Applicant[]): number {
        let avgLuckRate = 0;

        for (const grad of topGrad)
            avgLuckRate += grad.calcGraduateScore() / this.graduateSlots;

        return avgLuckRate;
    }

    public showTop(topGrad: Applicant[]): void {
        for (const grad of topGrad)
            console.log(grad.id, grad.getLuckRate());
    }

    public static main(): void {
        const totalApplicants: number = 12000;
        const graduationSlots: number = 10;

        const fig = new Course(totalApplicants, graduationSlots);
        const grads = fig.pullTop();
        fig.showTop(grads);
        console.log(fig.calcAverageLuckRate(grads));
    }
}

Course.main();