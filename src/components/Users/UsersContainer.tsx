import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC,
    changeFollowStatusAC,
    setTotalUserCountAC,
    setUsersAC,
    UserType
} from "../../redux/usersReducer";

type mapStateType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type mapDispatchType = {
    setUsers: (users: UserType[]) => void
    changeFollowStatus:(userId: number) => void
    changeCurrentPage:(value:number)=>void
    setTotalUserCount:(count:number)=>void
}
export type AllUsersPropsType = mapStateType & mapDispatchType


const mapStateToProps = (state: rootReducerType): mapStateType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pagesSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchType => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        changeFollowStatus:(userId: number)=>{
            dispatch(changeFollowStatusAC(userId))
        },
        changeCurrentPage:(value:number)=>{
            dispatch(changeCurrentPageAC(value))
        },
        setTotalUserCount:(totalCount:number)=>{
            dispatch(setTotalUserCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)