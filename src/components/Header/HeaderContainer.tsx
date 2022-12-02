import React from 'react';
import {rootReducerType} from "../../redux/redux-store";
import {authThunkCreator, setUser, UserAuthType} from "../../redux/userAuthReducer";
import {connect} from "react-redux";
import {Header} from "./Header";

type MapDispatchToPropsType = {
    setUser: (id: string, login: string, email: string, isUserAuth: boolean) => void
}

export type AllPropsType = UserAuthType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<AllPropsType>{
    componentDidMount() {
      authThunkCreator()
    }
    render(){
        return (
            <Header data={this.props}/>
        )
    }
}

let mapStateToProps = (state:rootReducerType):UserAuthType=>({
    data: state.userAuth.data
})

export const HeaderComponent = connect(mapStateToProps, {setUser})(HeaderContainer)