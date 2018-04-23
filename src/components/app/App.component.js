import React, {Component} from 'react';
import './App.css';
import {Grid} from "../grid/Grid.container";
import Button from 'react-uikit-button';

export class AppComponent extends Component {
    render() {
        const {onNewGame, steps} = this.props;
        return (
            <div className="App">
                <div>Steps: {steps}</div>
                <Grid />
                <Button onClick={onNewGame}>New Game</Button>
            </div>
        );
    }
}
