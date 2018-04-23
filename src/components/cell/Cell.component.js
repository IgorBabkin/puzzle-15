import React, {Component} from 'react';

export class Cell extends Component {
    render() {
        const {value} = this.props;
        return (
            <div className='grid__cell'>{value}</div>
        );
    }
}
