import React from 'react';
import './App.css';
import stylesNav from './components/Navigation/Navigation.module.css';
import {Navigation} from "components/Navigation/Navigation";
import {withRouter} from "react-router-dom";
import {HeaderComponent} from "components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "redux/appReducer";
import {rootReducerType} from "redux/redux-store";
import {PreLoader} from "common/components/PreLoader";
import {compose} from "redux";
import {Pages} from "components/Pages/Pages";

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
            <>
                <HeaderComponent/>
                <div className={stylesNav.wrapper}>
                    <Navigation/>
                    <Pages/>
                </div>
            </>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

////////// types ////////

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
