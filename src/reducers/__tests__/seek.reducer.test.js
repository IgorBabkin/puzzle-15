import {seekReducer} from "../seek.reducer";
import {SeekActions} from "../../actions/seek.actions";

describe('seek reducer', () => {
    it('should increment seek on next', () => {
        const state = 0;
        const expected = 1;

        const actual = seekReducer(state, SeekActions.next());

        expect(actual).toBe(expected);
    });

    it('should decrement seek on prev', () => {
        const state = 2;
        const expected = 1;

        const actual = seekReducer(state, SeekActions.prev());

        expect(actual).toBe(expected);
    });

    it('should update seek on update', () => {
        const state = 1;
        const expected = 4;

        const actual = seekReducer(state, SeekActions.update(expected));

        expect(actual).toBe(expected);
    });
});
