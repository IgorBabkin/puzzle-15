import {createSelector} from "reselect";
import {isGameFinished} from "../../reducers/snapshot.helpers";
import {currentSnapshotSelector} from "../grid/Grid.selector";

export const isGameFinishedSelector = createSelector(
    currentSnapshotSelector,
    isGameFinished
);
