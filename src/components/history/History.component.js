import React, {Component} from 'react';
import './History.css';
import {FlatButton} from "material-ui";

export class HistoryComponent extends Component {
    render() {
        const {step, total, onNext, onPrev, hasNext, hasPrev} = this.props;
        return (
            <div className='history'>
                <FlatButton
                    label="Previous"
                    onClick={onPrev}
                    disabled={!hasPrev}
                />
                <div className='history__step'>Step: {step} / {total}</div>
                <FlatButton
                    label="Next"
                    onClick={onNext}
                    disabled={!hasNext}
                />
            </div>
        );
    }
}
