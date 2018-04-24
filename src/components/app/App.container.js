import {connect} from "react-redux";
import {AppComponent} from "./App.component";
import {PuzzleActions} from "../../actions/puzzle.actions";
import {isGameFinishedSelector} from "./App.selector";

const mapStateToProps = state => ({
    finished: isGameFinishedSelector(state),
});

const mapDispatchToProps = {
    onNewGame: PuzzleActions.newGame,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
