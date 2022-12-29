import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    changeCurrentPage, followThunkCreator, getUsersThunkCreator, unfollowThunkCreator, User,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {PreLoader} from "../../common/components/PreLoader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

type mapStateType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<string>
}

type mapDispatchType = {
    changeCurrentPage: (value: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (id: string) => void
    unfollowThunkCreator: (id: string) => void
}
export type AllUsersPropsType = mapStateType & mapDispatchType

export class UsersComponent extends React.Component<AllUsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <> {this.props.isFetching ? <PreLoader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users} onPageChanged={(pageNumber: number) => this.onPageChanged(pageNumber)}
                       followingProgress={this.props.followingProgress}
                       followThunkCreator={this.props.followThunkCreator}
                       unfollowThunkCreator={this.props.unfollowThunkCreator}
                />
            </>
        )
    }
}

// const mapStateToProps = (state: rootReducerType): mapStateType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress
//     }
// }

const mapStateToProps = (state: rootReducerType): mapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export const UsersContainer = connect(mapStateToProps, {
    changeCurrentPage,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
})(UsersComponent)