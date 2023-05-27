import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {rootReducerType} from "redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    data: boolean
}

let mapStateToPropsForRedirect = (state: rootReducerType): MapStatePropsType => {
    return {
        data: state.userAuth.data.isUserAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {data, ...restProps} = props
        console.log('REDIRECT')
        console.log(data)
        if (!data) {
            return (<Redirect to={'/login'}/>)
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}