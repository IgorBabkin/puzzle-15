import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './components/app/App.container';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
import {generateGrid} from "./reducers/grid.helpers";

const store = createStore(reducers, {
    grid: generateGrid(),
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
