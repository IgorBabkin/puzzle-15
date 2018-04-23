import {GridComponent} from "./Grid.component";
import * as _ from 'lodash';
import {GridActions} from "../../actions/grid.actions";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        cells: _.flatten(state.grid),
    }
};

const mapDispatchToProps = {
    onCellClick: GridActions.update,
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
