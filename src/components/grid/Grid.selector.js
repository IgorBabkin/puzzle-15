import {canUpdateGrid} from "../../reducers/grid.helpers";
import * as _ from 'lodash';

export const cellsSelector = state => _.flatten(state.grid).map(item => ({
    value: item,
    canDrag: canUpdateGrid(state.grid, item),
}));
