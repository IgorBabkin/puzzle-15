import {canUpdateGrid} from "../../reducers/snapshot.helpers";
import {createSelector} from "reselect";
import {snapshotToCellsViewModel} from "./Grid.helpers";

export const currentSnapshotSelector = ({snapshots, seek}) => snapshots[seek];

export const cellsSelector = createSelector(
    currentSnapshotSelector,
    snapshotToCellsViewModel(canUpdateGrid),
);

export const disabledSelector = ({seek, snapshots}) => seek < (snapshots.length - 1);
