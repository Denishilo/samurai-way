import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateTypeProps} from "./redux/redux";
import {BrowserRouter} from "react-router-dom";


export const renderTree = (state: StateTypeProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addMessage={addMessage} addPost={addPost}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}