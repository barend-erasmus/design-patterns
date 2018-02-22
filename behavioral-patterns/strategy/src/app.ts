import { GameScores } from './game-scores';
import { QuickSortStrategy } from './strategies/quick-sort';

const gameScores: GameScores = new GameScores(new QuickSortStrategy(), [
    4, 6, 1, 5, 3, 9, 5, 6, 2, 0, 4, 5, 8, 9, 1, 9,
]);

console.log(`The max score is ${gameScores.max()}.`);
