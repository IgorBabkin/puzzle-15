import {GridComponent} from "./Grid.component";
import * as _ from 'lodash';
import {GridActions} from "../../actions/grid.actions";
import {connect} from "react-redux";
import {canUpdateGrid} from "../../reducers/grid.helpers";

const mapStateToProps = state => {
    return {
        cells: _.flatten(state.grid).map(item => ({
            value: item,
            canDrag: canUpdateGrid(state.grid, item),
        })),
    }
};

const mapDispatchToProps = {
    onCellClick: GridActions.update,
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
