import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import debounce from 'debounce';

import rootReducer, { initialState } from "./store/reducers/rootReducer";
import App from "./app";
import * as ls from './localStorage';


const recipeList = ls.load('recipList');

const store = createStore(rootReducer, {
    ...initialState, 
    recipes: recipeList || initialState.recipes,
});

store.subscribe(debounce(() => {
    const { recipes } = store.getState();
    ls.save('recipList', recipes);
}), 200);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById("root"));