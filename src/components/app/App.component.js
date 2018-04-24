import React, {Component} from 'react';
import './App.css';
import {Grid} from "../grid/Grid.container";
import {History} from "../history/History.container";
import {RaisedButton} from "material-ui";

export class AppComponent extends Component {
    render() {
        const {onNewGame, finished} = this.props;
        return (
            <div className="app">
                {finished && <div className="app__notification">Congratulations!</div>}

                <RaisedButton
                    label="New Game"
                    onClick={onNewGame}
                    primary={true}
                />

                <div className="app__grid">
                    <Grid/>
                </div>

                <History/>
            </div>
        );
    }
}
