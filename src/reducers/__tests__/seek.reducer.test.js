import {seekReducer} from "../seek.reducer";
import {SeekActions} from "../../actions/seek.actions";

describe('seek reducer', () => {
    it('should update seek on update', () => {
        const state = 1;
        const expected = 4;

        const actual = seekReducer(state, SeekActions.update(expected));

        expect(actual).toBe(expected);
    });
});
