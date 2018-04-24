import {canUpdateGrid} from "../../reducers/snapshot.helpers";
import * as _ from 'lodash';

export const currentSnapshotSelector = ({snapshots, seek}) => snapshots[seek];

export const cellsSelector = state => {
    const currentSnapshot = currentSnapshotSelector(state);
    return _.flatten(currentSnapshot).map(item => ({
        value: item,
        canDrag: canUpdateGrid(currentSnapshot, item),
    }));
};

export const disabledSelector = ({seek, snapshots}) => seek < (snapshots.length - 1);
