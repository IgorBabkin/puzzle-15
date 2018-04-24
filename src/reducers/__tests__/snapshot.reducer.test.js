import {snapshotsReducer} from "../snapshots.reducer";
import {SnapshotActions} from "../../actions/snapshot.actions";

describe('snapshot reducer', () => {
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
        const state = [[],[]];
        const newSnapshot = [];
        const expected = [
            ...state,
            newSnapshot,
        ];
        const cellValue = 12;
        updateGridMock.mockImplementation((grid, target) => (grid === state && target === cellValue) ? newSnapshot : []);

        const actual = reducer(state, SnapshotActions.addSnapshot(cellValue));

        expect(actual).toEqual(expected);
    });

    it('should return new state on generate', function () {
        const newSnapshot = [];
        const expected = [newSnapshot];
        generateGridMock.mockImplementation(() => newSnapshot);

        const actual = reducer(undefined, SnapshotActions.dropSnapshots());

        expect(actual).toEqual(expected);
    });
});
