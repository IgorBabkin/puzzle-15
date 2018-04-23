import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/app/App.component';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";

const store = createStore(reducers, {
    grid: [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,0],
    ]
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
