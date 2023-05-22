import React from 'react';
import {rootReducerType} from "redux/redux-store";
import {UserAuthType} from "redux/userAuthReducer";
import {connect} from "react-redux";
import {Header} from "./Header";
import {logout} from "api/authAPI";

type MapDispatchToPropsType = {
    logout: () => void
}

export type AllPropsType = UserAuthType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<AllPropsType> {
    render() {
        return (
            <Header data={this.props}/>
        )
    }
}

let mapStateToProps = (state: rootReducerType): UserAuthType => ({
    data: state.userAuth.data,
    captchaUrl: state.userAuth.captchaUrl
})

export const HeaderComponent = connect(mapStateToProps, {logout})(HeaderContainer)