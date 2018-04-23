import React, {Component} from 'react';
import {Cell} from "./cell/Cell.component";
import './Grid.css';

export class GridComponent extends Component {
    render() {
        const {cells, onCellClick} = this.props;
        return (
            <div className='grid'>
                {cells.map(item =>
                    <Cell
                        key={item}
                        value={item}
                        onClick={onCellClick}
                    />
                )}
            </div>
        );
    }
}
