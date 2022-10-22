import React from 'react';
import './index.css'
import {store} from "./redux/redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

store.subscribe(renderTree)

renderTree()