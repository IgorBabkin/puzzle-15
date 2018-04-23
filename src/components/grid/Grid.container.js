import {GridComponent} from "./Grid.component";
import {GridActions} from "../../actions/grid.actions";
import {connect} from "react-redux";
import {cellsSelector} from "./Grid.selector";

const mapStateToProps = state => ({
    cells: cellsSelector(state),
});

const mapDispatchToProps = {
    onCellClick: GridActions.update,
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
