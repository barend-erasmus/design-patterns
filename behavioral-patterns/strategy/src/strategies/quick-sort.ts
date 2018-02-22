import { ISortStrategy } from '../interfaces/sort-strategy';

export class QuickSortStrategy implements ISortStrategy {
    public sort(data: number[]): number[] {
        return data.sort();
    }
}
