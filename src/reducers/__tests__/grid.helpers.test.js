import {canUpdateGrid, updateGrid} from "../grid.helpers";

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
});
