import {canUpdateGrid, generateGrid, isGameFinished, updateGrid} from "../snapshot.helpers";

describe('grid helpers', () => {
    it('should update grid', () => {
        const grid = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0],
        ];
        const expected = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,0],
            [13,14,15,12],
        ];

        const actual = updateGrid(grid, 12);

        expect(actual).toEqual(expected);
    });

    it('should return true on canUpdateGrid if target is close to zero', () => {
        const grid = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0],
        ];

        const actual = canUpdateGrid(grid, 12);

        expect(actual).toBeTruthy();
    });

    it('should return false on canUpdateGrid if target is not on the same line', () => {
        const grid = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0],
        ];

        const actual = canUpdateGrid(grid, 11);

        expect(actual).toBeFalsy();
    });

    function sumOfGrid(grid) {
        let sum = 0;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                sum += grid[i][j];
            }
        }

        return sum;
    }

    it('generated grid should be 4x4', () => {
        const grid = generateGrid();

        expect(grid.length).toEqual(4);
        expect(grid[0].length).toEqual(4);
    });

    it('amount of numbers should be equal to 120', () => {
        const expected = (15 + 1) * 15 / 2;

        const grid = generateGrid();
        const actual = sumOfGrid(grid);

        expect(actual).toEqual(expected);
    });

    it('game should be finished', () => {
        const grid = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0],
        ];

        const actual = isGameFinished(grid);

        expect(actual).toBeTruthy();
    });

    it('game should be not finished', () => {
        const grid = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,0,15],
        ];

        const actual = isGameFinished(grid);

        expect(actual).toBeFalsy();
    });
});
