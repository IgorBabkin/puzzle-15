import {gridReducer} from "../grid.reducer";
import {GridActions} from "../../actions/grid.actions";

describe('grid reducer', () => {
    let updateGridMock;
    let generateGridMock;
    let reducer;

    beforeEach(() => {
        updateGridMock = jest.fn();
        generateGridMock = jest.fn();
        reducer = gridReducer(
            updateGridMock,
            generateGridMock
        );
    });

    it('should return updated state', function () {
        const state = [];
        const expected = [];
        const cellValue = 12;
        updateGridMock.mockImplementation((grid, target) => (grid === state && target === cellValue) ? expected : []);

        const actual = reducer(state, GridActions.update(cellValue));

        expect(actual).toBe(expected);
    });

    it('should return new state on generate', function () {
        const expected = [];
        generateGridMock.mockImplementation(() => expected);

        const actual = reducer([], GridActions.generateNew());

        expect(actual).toBe(expected);
    });
});
