import React from 'react';
import './index.css'
import {state, subscribe} from "./redux/redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateTypeProps, updateNewPostText, updateNewTextMessage} from "./redux/redux";
import {BrowserRouter} from "react-router-dom";


const renderTree = (state: StateTypeProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText}
                 updateNewTextMessage={updateNewTextMessage}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

subscribe(renderTree)

renderTree(state)