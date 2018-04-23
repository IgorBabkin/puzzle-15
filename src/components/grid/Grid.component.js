import React, {Component} from 'react';
import {Cell} from "../cell/Cell.component";

export class Grid extends Component {
    render() {
        const {cells} = this.props;
        return (
            <div className='grid'>
                {cells.map(item =>
                    <Cell
                        key={item}
                        value={item}
                    />
                )}
            </div>
        );
    }
}
