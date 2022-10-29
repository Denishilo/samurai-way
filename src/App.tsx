import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ReduxStoreType} from "./redux/redux-store";
import {Dispatch} from "redux";

export type AppTypeProps = {
    state: ReduxStoreType
    dispatch: Dispatch
}

const App = (props: AppTypeProps) => {
    const {dispatch} = props;

    const state = props.state;

    const {dialogsPages, mainPages} = state

    return (
        <div className='wrapper'>
            <Header/>
            <section>
                <div className={stylesNav.navigation__section}>
                    <Navigation/>
                    <div className='wrapper__content'>
                        <Route path={'/profile'}
                               render={() => <MainContainer
                                   mainPages={mainPages}
                                   dispatch={dispatch.bind(props.state)}
                               />}/>

                        <Route path={'/dialogs'} render={() => <Dialogs dialogsPages={dialogsPages}
                                                                        dispatch={dispatch.bind(props.state)}/>}/>
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
