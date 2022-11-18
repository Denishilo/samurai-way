import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    changeCurrentPage, changeFetching,
    changeFollowStatus,
    setTotalUserCount,
    setUsers, User,
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {PreLoader} from "../../common/components/PreLoader";


type mapStateType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchType = {
    setUsers: (users: User[]) => void
    changeFollowStatus: (userId: string) => void
    changeCurrentPage: (value: number) => void
    setTotalUserCount: (count: number) => void
    changeFetching: () => void
}
export type AllUsersPropsType = mapStateType & mapDispatchType


export class UsersComponent extends React.Component<AllUsersPropsType> {
    componentDidMount() {
        this.props.changeFetching()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeFetching()
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.changeFetching()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeFetching()
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <> {this.props.isFetching ? <PreLoader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users} onPageChanged={(pageNumber: number) => this.onPageChanged(pageNumber)}
                       changeFollowStatus={this.props.changeFollowStatus}/>
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
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    changeFollowStatus,
    changeCurrentPage,
    setTotalUserCount,
    changeFetching
})(UsersComponent)