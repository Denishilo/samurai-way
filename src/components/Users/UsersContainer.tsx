import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {changeFollowStatusAC,setUsersAC,UserType} from "../../redux/usersReducer";

type mapStateType = {
    users: UserType[]
}

type mapDispatchType = {
    setUsers: (users: UserType[]) => void
    changeFollowStatus:(userId: number) => void
}
export type AllUsersPropsType = mapStateType & mapDispatchType


const mapStateToProps = (state: rootReducerType): mapStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchType => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        changeFollowStatus:(userId: number)=>{
            dispatch(changeFollowStatusAC(userId))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)