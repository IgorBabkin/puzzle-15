import React, {Component} from 'react';
import './History.css';
import {IconButton} from "material-ui";

export class HistoryComponent extends Component {
    render() {
        const {step, total, hasNext, hasPrev, onSeek} = this.props;
        const stepTo = (position) => () => onSeek(position);
        return (
            <div className='history'>
                <IconButton
                    iconClassName="material-icons"
                    onClick={stepTo(0)}
                    disabled={!hasPrev}
                >skip_previous</IconButton>

                <IconButton
                    iconClassName="material-icons"
                    onClick={stepTo(step - 1)}
                    disabled={!hasPrev}
                >fast_rewind</IconButton>

                <div className='history__step'>Step: {step} / {total}</div>

                <IconButton
                    iconClassName="material-icons"
                    onClick={stepTo(step + 1)}
                    disabled={!hasNext}
                >fast_forward</IconButton>

                <IconButton
                    iconClassName="material-icons"
                    onClick={stepTo(total)}
                    disabled={!hasNext}
                >skip_next</IconButton>
            </div>
        );
    }
}
