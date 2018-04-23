import {gridReducer} from "../grid.reducer";
import {GridActions} from "../../actions/grid.actions";

describe('grid reducer', () => {
    let canUpdateGridMock;
    let updateGridMock;
    let reducer;

    beforeEach(() => {
        canUpdateGridMock = jest.fn();
        updateGridMock = jest.fn();
        reducer = gridReducer(canUpdateGridMock, updateGridMock);
    });

    it('should return previous state if cannot swap', function () {
        const state = [];
        const expected = state;
        canUpdateGridMock.mockImplementation((grid) => grid !== state);

        const actual = reducer(state, GridActions.update(3));

        expect(actual).toBe(expected);
    });

    it('should return updated state if can swap', function () {
        const state = [];
        const expected = [];
        const cellValue = 12;
        canUpdateGridMock.mockImplementation((grid) => grid === state);
        updateGridMock.mockImplementation((grid, target) => (grid === state && target === cellValue) ? expected : []);

        const actual = reducer(state, GridActions.update(cellValue));

        expect(actual).toBe(expected);
    });
});
