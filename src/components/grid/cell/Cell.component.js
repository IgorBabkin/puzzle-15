import React, {Component} from 'react';
import {Paper} from "material-ui";

export class Cell extends Component {
    render() {
        const {value, canDrag} = this.props.item;
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#337ab7',
            color: '#fff',
            visibility: value ? 'visible' : 'hidden',
            cursor: canDrag ? 'default' : 'not-allowed',
            hover: {
                backgroundColor: 'red',
            }
        };

        return (
            <Paper zDepth={1} style={style} onClick={this.onClickHandler} circle={true}>
                {value}
            </Paper>
        );
    }

    onClickHandler = () => {
        const {item: {value, canDrag}, onClick} = this.props;
        if (canDrag)
            onClick(value);
    };
}
