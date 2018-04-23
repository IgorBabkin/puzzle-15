import React, {Component} from 'react';

export class Cell extends Component {
    render() {
        const {value} = this.props;
        const className = value ? 'grid__cell' : 'grid__zero-cell';

        return (
            <div className={className}>{value}</div>
        );
    }
}
