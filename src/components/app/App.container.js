import {connect} from "react-redux";
import {AppComponent} from "./App.component";
import {isGameFinished} from "../../reducers/snapshot.helpers";
import {PuzzleActions} from "../../actions/puzzle.actions";
import {currentSnapshotSelector} from "../grid/Grid.selector";

const mapStateToProps = state => {
    const {currentSnapshot} = currentSnapshotSelector(state);
    return {
        finished: isGameFinished(currentSnapshot),
    };
};

const mapDispatchToProps = {
    onNewGame: PuzzleActions.newGame,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
