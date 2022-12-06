import React from "react";
import {Redirect} from "react-router-dom";
import {Dialogs} from "../Dialogs/Dialogs";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    data: boolean
}
let mapStateToPropsForRedirect = (state: rootReducerType): MapStatePropsType => {
    return {
        data: state.userAuth.data.isUserAuth
    }
}

export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStatePropsType) => {
        if (!props.data) return (<Redirect to={'./login'}/>)
        return <Component {...props}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}