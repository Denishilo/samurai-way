import React from 'react';
import './index.css'
import {ReduxStoreType, store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const renderTree = (state:ReduxStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

store.subscribe(()=>{
    let state = store.getState()
    renderTree(state)
})

renderTree(store.getState())