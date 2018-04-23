import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './components/app/App.container';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
import {StateMemento} from "./services/gridMemento";

const store = createStore(reducers, StateMemento.getState());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

window.addEventListener('unload', function() {
    StateMemento.setState(store.getState());
});
