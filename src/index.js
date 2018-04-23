import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {App} from './components/app/App.container';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
import {StateMemento} from "./services/stateMemento";
import thunk from "redux-thunk";

const store = createStore(reducers, StateMemento.getState(), applyMiddleware(thunk));
window.store = store;

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

window.addEventListener('unload', function() {
    StateMemento.setState(store.getState());
});
