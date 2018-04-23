import {SnapshotActions} from "./snapshot.actions";
import {SeekActions} from "./seek.actions";

export const PuzzleActions = {
    nextStep: snapshot => (dispatch, getState) => {
        dispatch(SnapshotActions.addSnapshot(snapshot));
        const {snapshots} = getState();
        dispatch(SeekActions.update(snapshots.length-1));
    },

    newGame: () => dispatch => {
        dispatch(SnapshotActions.dropSnapshots());
        dispatch(SeekActions.update(0));
    },
};
