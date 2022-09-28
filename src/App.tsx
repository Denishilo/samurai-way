import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <section>
                    <div className={stylesNav.navigation__section}>
                        <Navigation/>
                        <div className='wrapper__content'>
                            <Route path={'/profile'} component={MainContainer}/>
                            <Route path={'/dialogs'} component={Dialogs}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/settings'} component={Settings}/>
                        </div>

                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
