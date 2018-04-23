import {snapshotsReducer} from "../grid.reducer";
import {SnapshotActions} from "../../actions/grid.actions";

describe('grid reducer', () => {
    let updateGridMock;
    let generateGridMock;
    let reducer;

    beforeEach(() => {
        updateGridMock = jest.fn();
        generateGridMock = jest.fn();
        reducer = snapshotsReducer(
            updateGridMock,
            generateGridMock
        );
    });

    it('should return updated state', function () {
        const state = [];
        const expected = [];
        const cellValue = 12;
        updateGridMock.mockImplementation((grid, target) => (grid === state && target === cellValue) ? expected : []);

        const actual = reducer(state, SnapshotActions.addSnapshot(cellValue));

        expect(actual).toBe(expected);
    });

    it('should return new state on generate', function () {
        const expected = [];
        generateGridMock.mockImplementation(() => expected);

        const actual = reducer([], SnapshotActions.dropSnapshots());

        expect(actual).toBe(expected);
    });
});
