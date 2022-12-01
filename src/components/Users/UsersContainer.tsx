import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    changeCurrentPage, changeFetching,
    changeFollowStatus, getUsersThunkCreator,
    setTotalUserCount,
    setUsers, toggleFollowProgress, User,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {PreLoader} from "../../common/components/PreLoader";
import {usersAPI} from "../../api/usersAPI";
import {Dispatch} from "redux";


type mapStateType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<string>
}

type mapDispatchType = {
    setUsers: (users: User[]) => void
    changeFollowStatus: (userId: string) => void
    changeCurrentPage: (value: number) => void
    setTotalUserCount: (count: number) => void
    changeFetching: () => void
    toggleFollowProgress:(isFetching:boolean, userId:string)=>void
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>any
}
export type AllUsersPropsType = mapStateType & mapDispatchType

export class UsersComponent extends React.Component<AllUsersPropsType> {
    componentDidMount() {

      this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    }
    render() {
        return (
            <> {this.props.isFetching ? <PreLoader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users} onPageChanged={(pageNumber: number) => this.onPageChanged(pageNumber)}
                       changeFollowStatus={this.props.changeFollowStatus}
                       toggleFollowProgress={this.props.toggleFollowProgress}
                       followingProgress={this.props.followingProgress}
                       />
            </>
        )
    }
}

const mapStateToProps = (state: rootReducerType): mapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    changeFollowStatus,
    changeCurrentPage,
    setTotalUserCount,
    changeFetching,
    toggleFollowProgress,
    getUsersThunkCreator,
})(UsersComponent)