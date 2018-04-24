import * as _ from "lodash";

export const snapshotToCellsViewModel = canUpdateGrid => snapshot => {
    return _.flatten(snapshot).map(item => ({
        value: item,
        canDrag: canUpdateGrid(snapshot, item),
    }))
};