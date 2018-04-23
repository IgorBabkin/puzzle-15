import React, {Component} from 'react';
import {Cell} from "./cell/Cell.component";
import './Grid.css';

export class GridComponent extends Component {
    render() {
        const {cells, onCellClick} = this.props;
        return (
            <div className={this.getCssClassName()} onClickCapture={this.onClickCaptureHandler}>
                {cells.map(item =>
                    <Cell
                        key={item.value}
                        item={item}
                        onClick={onCellClick}
                    />
                )}
            </div>
        );
    }

    onClickCaptureHandler = (e) => {
        const {disabled} = this.props;
        if (disabled) {
            e.stopPropagation();
        }
    };

    getCssClassName() {
        const {disabled} = this.props;
        const classNames = ['grid'];

        if (disabled)
            classNames.push('grid_disabled');

        return classNames.join(' ')
    }
}
