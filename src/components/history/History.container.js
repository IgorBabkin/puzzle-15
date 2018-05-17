import {connect} from "react-redux";
import {HistoryComponent} from "./History.component";
import {SeekActions} from "../../actions/seek.actions";

const mapStateToProps = ({seek, snapshots}) => ({
    step: seek,
    total: snapshots.length - 1,
    hasNext: seek < (snapshots.length - 1),
    hasPrev: seek > 0,
});

const mapDispatchToProps = {
    onSeek: SeekActions.update,
};

export const History = connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);
