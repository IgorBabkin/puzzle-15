import {canUpdateGrid} from "../../reducers/snapshot.helpers";
import * as _ from 'lodash';

export const currentSnapshotSelector = ({snapshots, seek}) => snapshots[seek];
export const cellsSelector = state => _.flatten(currentSnapshotSelector(state)).map(item => ({
    value: item,
    canDrag: canUpdateGrid(currentSnapshotSelector(state), item),
}));
