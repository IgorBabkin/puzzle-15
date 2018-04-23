import {GridActions} from "../../actions/grid.actions";
import {connect} from "react-redux";
import {AppComponent} from "./App.component";

const mapStateToProps = ({steps}) => ({
    steps,
});

const mapDispatchToProps = {
    onNewGame: GridActions.generateNew,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
