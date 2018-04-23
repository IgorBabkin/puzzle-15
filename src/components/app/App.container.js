import {GridActions} from "../../actions/grid.actions";
import {connect} from "react-redux";
import {AppComponent} from "./App.component";
import {isGameFinished} from "../../reducers/grid.helpers";

const mapStateToProps = ({steps, grid}) => ({
    finished: isGameFinished(grid),
    steps,
});

const mapDispatchToProps = {
    onNewGame: GridActions.generateNew,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
