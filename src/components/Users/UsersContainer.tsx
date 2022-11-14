import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC,
    changeFollowStatusAC,
    setTotalUserCountAC,
    setUsersAC,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";

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


export class UsersComponent extends React.Component<AllUsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users} onPageChanged={(pageNumber: number) => this.onPageChanged(pageNumber)}
                      changeFollowStatus={this.props.changeFollowStatus}/>
    }
}

const mapStateToProps = (state: rootReducerType): mapStateType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)