import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Navigation} from "components/Navigation/Navigation";
import {Redirect, Route, withRouter} from "react-router-dom";
import {Settings} from "components/Settings/Settings";
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {UsersContainer} from "components/Users/UsersContainer";
import {MainContainer} from "components/MainContainer/MainContainer";
import {HeaderComponent} from "components/Header/HeaderContainer";
import {LoginContainer} from "components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "redux/appReducer";
import {rootReducerType} from "redux/redux-store";
import {PreLoader} from "common/components/PreLoader";
import {compose} from "redux";

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <PreLoader/>
        return (
            <div className='wrapper'>
                <HeaderComponent/>
                <div className={stylesNav.navigation__section}>
                    <Navigation/>
                    <div className='wrapper__content'>
                        <Route path={'/'} render={() => <Redirect to={'/profile/'}/>}/>
                        <Route path={'/profile/:userId?'} render={() => <MainContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
