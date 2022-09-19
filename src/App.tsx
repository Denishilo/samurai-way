import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {MainContainer} from "./components/MainContainer/MainContainer";

const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <section>
                <div className={stylesNav.navigation__section}>
                    <Navigation/>
                    <MainContainer/>
                </div>
            </section>
        </div>
    );
}

export default App;
