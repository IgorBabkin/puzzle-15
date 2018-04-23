import {GridComponent} from "./Grid.component";
import {connect} from "react-redux";
import {cellsSelector} from "./Grid.selector";
import {PuzzleActions} from "../../actions/puzzle.actions";

const mapStateToProps = state => ({
    cells: cellsSelector(state),
    disabled: state.seek < (state.snapshots.length - 1)
});

const mapDispatchToProps = {
    onCellClick: PuzzleActions.nextStep,
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
