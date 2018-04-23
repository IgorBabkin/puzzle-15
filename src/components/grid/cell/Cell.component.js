import React, {Component} from 'react';

export class Cell extends Component {
    render() {
        const {value, onClick} = this.props;
        const className = value ? 'grid__cell' : 'grid__zero-cell';
        const onClickHandler = () => {
            onClick(value);
        };

        return (
            <div className={className} onClick={onClickHandler}>{value}</div>
        );
    }
}
