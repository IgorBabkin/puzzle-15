import React, {Component} from 'react';
import './App.css';
import {Grid} from "../grid/Grid.container";
import Button from 'react-uikit-button';
import {History} from "../history/History.container";

export class AppComponent extends Component {
    render() {
        const {onNewGame, finished} = this.props;
        return (
            <div className="app">
                {finished && <div className="app__notification">Congratulations!</div>}

                <Button onClick={onNewGame}>New Game</Button>

                <div className="app__grid">
                    <Grid/>
                </div>

                <History/>
            </div>
        );
    }
}
