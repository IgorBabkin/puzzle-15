import {snapshotToCellsViewModel} from "../Grid.helpers";

describe('grid helpers', () => {
    it('should update grid', () => {
        const snapshot = [[3, 4]];
        const canUpdateGridMock = jest.fn((grid, item) => grid === snapshot && item === 4);
        const expected = [
            {
                value: 3,
                canDrag: false
            },
            {
                value: 4,
                canDrag: true
            }
        ];

        const func = snapshotToCellsViewModel(canUpdateGridMock);
        let actual = func(snapshot);

        expect(actual).toEqual(expected);
    });
});
