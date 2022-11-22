import React from 'react';
import {rootReducerType} from "../../redux/redux-store";
import {setUser, UserAuthType} from "../../redux/userAuthReducer";
import {connect} from "react-redux";
import axios from "axios";
import {Header} from "./Header";

type MapDispatchToPropsType = {
    setUser:(id:string, login:string, email:string,isUserAuth: boolean)=>void
}

export type AllPropsType = UserAuthType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<AllPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(res => {
                console.log(res)
                console.log(res.data.data.id)
                console.log(res.data.data.login)

                this.props.setUser(res.data.data.id, res.data.data.login,res.data.data.email,true )
            })
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