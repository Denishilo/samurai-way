import {Route, Switch} from "react-router-dom";
import {MainContainer} from "components/MainContainer/MainContainer";
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {UsersContainer} from "components/Users/UsersContainer";
import {Settings} from "components/Settings/Settings";
import {LoginContainer} from "components/Login/Login";
import React from "react";
import s from './Pages.module.css'

export const Pages = () => {
    return (
        <div className={s.wrapper}>
            <Switch>
                <Route exact path={'/'} render={() => <MainContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <MainContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/login'} render={() => <LoginContainer/>}/>
                <Route path={'*'} render={() => <div>404</div>}/>
            </Switch>
        </div>
    )
}