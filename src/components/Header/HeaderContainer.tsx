import React from 'react';
import {rootReducerType} from "../../redux/redux-store";
import {setUser, UserAuthType} from "../../redux/userAuthReducer";
import {connect} from "react-redux";
import {Header} from "./Header";
import {authAPI} from "../../api/authAPI";

type MapDispatchToPropsType = {
    setUser:(id:string, login:string, email:string,isUserAuth: boolean)=>void
}

export type AllPropsType = UserAuthType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<AllPropsType>{
    componentDidMount() {
        authAPI.authMe().then(res=> this.props.setUser(res.data.id, res.data.login,res.data.email,true ))
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