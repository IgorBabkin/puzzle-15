import {GridComponent} from "./Grid.component";
import {connect} from "react-redux";
import {cellsSelector, disabledSelector} from "./Grid.selector";
import {PuzzleActions} from "../../actions/puzzle.actions";

const mapStateToProps = state => ({
    cells: cellsSelector(state),
    disabled: disabledSelector(state),
});

const mapDispatchToProps = {
    onCellClick: PuzzleActions.nextStep,
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
