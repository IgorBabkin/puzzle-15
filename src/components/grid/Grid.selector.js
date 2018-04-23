import {canUpdateGrid} from "../../reducers/grid.helpers";
import * as _ from 'lodash';

export const currentSnapshotSelector = ({snapshots, seek}) => {
    let snapshot = snapshots[seek];
    return snapshot;
};

export const cellsSelector = state => _.flatten(currentSnapshotSelector(state)).map(item => ({
    value: item,
    canDrag: canUpdateGrid(currentSnapshotSelector(state), item),
}));
