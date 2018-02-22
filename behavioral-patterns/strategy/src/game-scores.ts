import { ISortStrategy } from './interfaces/sort-strategy';

export class GameScores {

    constructor(
        private sortStrategy: ISortStrategy,
        private scores: number[],
    ) {

    }

    public max(): number {
        const sortedData: number[] = this.sortStrategy.sort(this.scores);

        return sortedData[sortedData.length - 1];
    }
}
