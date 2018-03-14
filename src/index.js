import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from "./store/reducers/rootReducer";
import App from "./app";



const store = createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById("root"));