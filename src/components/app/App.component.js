import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Grid} from "../grid/Grid.component";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Grid
                    cells={[
                        1, 2, 3, 4,
                        5, 6, 7, 8,
                        9, 10, 11, 12,
                        13, 14, 15, 0,
                    ]}
                    onClick={value => {
                        console.log(value)
                    }}
                />
            </div>
        );
    }
}

export default App;
