import React, {Component} from 'react';
import Button from 'react-uikit-button';
import './History.css';

export class HistoryComponent extends Component {
    render() {
        const {steps, onNext, onPrev} = this.props;
        return (
            <div className='history'>
                <Button onClick={onPrev}>Previous</Button>
                <div>Steps: {steps}</div>
                <Button onClick={onNext}>Next</Button>
            </div>
        );
    }
}
