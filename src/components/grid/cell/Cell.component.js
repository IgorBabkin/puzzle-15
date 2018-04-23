import React, {Component} from 'react';

export class Cell extends Component {
    render() {
        const {value} = this.props.item;
        return (
            <div className={this.getClassName()} onClick={this.onClickHandler}>{value}</div>
        );
    }

    onClickHandler = () => {
        const {item: {value, canDrag}, onClick} = this.props;
        if (canDrag)
            onClick(value);
    };

    getClassName() {
        const {value, canDrag} = this.props.item;
        const className = [value ? 'grid__cell' : 'grid__zero-cell'];
        if (!canDrag)
            className.push('grid__cell_drag_off ');

        return className.join(' ');
    }
}
