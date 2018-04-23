import React, {Component} from 'react';
import Button from 'react-uikit-button';
import './History.css';

export class HistoryComponent extends Component {
    render() {
        const {step, onNext, onPrev, hasNext, hasPrev} = this.props;
        return (
            <div className='history'>
                <Button onClick={onPrev} disabled={!hasPrev}>Previous</Button>
                <div>Step: {step}</div>
                <Button onClick={onNext} disabled={!hasNext}>Next</Button>
            </div>
        );
    }
}
