import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {MyPhoto} from "./components/Photos/MyPhoto";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {HeaderComponent} from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='wrapper'>
            <HeaderComponent/>
            <section>
                <div className={stylesNav.navigation__section}>
                    <Navigation/>
                    <div className='wrapper__content'>
                        <Route path={'/'} render={() => <Redirect to={'/profile/'}/>}/>
                        <Route path={'/profile/:userId?'} render={() => <MainContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/photo'} render={() => <MyPhoto/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default App;
