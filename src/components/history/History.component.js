import React, {Component} from 'react';
import Button from 'react-uikit-button';
import './History.css';

export class HistoryComponent extends Component {
    render() {
        const {step, total, onNext, onPrev, hasNext, hasPrev} = this.props;
        return (
            <div className='history'>
                <Button onClick={onPrev} disabled={!hasPrev} className='history__btn'>Previous</Button>
                <div className='history__step'>Step: {step} / {total}</div>
                <Button onClick={onNext} disabled={!hasNext} className='history__btn'>Next</Button>
            </div>
        );
    }
}
