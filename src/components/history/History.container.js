import {connect} from "react-redux";
import {HistoryComponent} from "./History.component";
import {SeekActions} from "../../actions/seek.actions";

const mapStateToProps = ({seek, snapshots}) => ({
    step: seek,
    hasNext: seek < (snapshots.length - 1),
    hasPrev: seek > 0,
});

const mapDispatchToProps = {
    onNext: SeekActions.next,
    onPrev: SeekActions.prev,
};

export const History = connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);
