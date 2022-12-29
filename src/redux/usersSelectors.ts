import {rootReducerType} from "./redux-store";

export const getUsers = (state:rootReducerType) => {
    return state.usersPage.users
}

export const getPageSize = (state:rootReducerType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:rootReducerType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:rootReducerType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:rootReducerType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress= (state:rootReducerType) => {
    return state.usersPage.followingProgress
}