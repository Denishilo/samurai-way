import React from 'react';
import {rootReducerType} from "../../redux/redux-store";
import {authThunkCreator,UserAuthType} from "../../redux/userAuthReducer";
import {connect} from "react-redux";
import {Header} from "./Header";

type MapDispatchToPropsType = {
    authThunkCreator: () => void
}

export type AllPropsType = UserAuthType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<AllPropsType> {
    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        return (
            <Header data={this.props}/>
        )
    }
}

let mapStateToProps = (state: rootReducerType): UserAuthType => ({
    data: state.userAuth.data
})

export const HeaderComponent = connect(mapStateToProps, {authThunkCreator})(HeaderContainer)