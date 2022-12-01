import {PhotoType} from "./mainPagePostReducer";
import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "redux";

export type InitialStateType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<string>
}

type SetUsersType = {
    type: 'SET-USERS',
    payload: {
        users: User[]
    }
}

export type User = {
    "name": string
    "id": string
    "uniqueUrlName": null | string
    "photos": PhotoType
    "status": null | string
    "followed": boolean
}

type ChangeFollowStatusType = {
    type: 'CHANGE-FOLLOW-STATUS',
    payload: {
        id: string
    }
}

type ChangeCurrentPageType = {
    type: 'CHANGE-CURRENT-PAGE',
    payload: {
        value: number
    }
}

type SetTotalUserCountType = {
    type: 'SET-TOTAL-COUNT',
    payload: {
        count: number
    }
}
type ChangeFetchingValueType = {
    type: 'TOGGLE-IS-FETCHING'

}

type ToggleFollowingProgress = {
    type: 'TOGGLE-FOLLOWING',
    payload:{
        isFetching:boolean
        userId:string
    }
}

type AllUsersActionType =
    SetUsersType
    | ChangeFollowStatusType
    | ChangeCurrentPageType
    | SetTotalUserCountType
    | ChangeFetchingValueType
    | ToggleFollowingProgress

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export const UsersReducer = (state: InitialStateType = initialState, action: AllUsersActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}

        case "CHANGE-FOLLOW-STATUS":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? {...el, followed: !el.followed} : el)
            }
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.payload.value}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.payload.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: !state.isFetching}
        case "TOGGLE-FOLLOWING":
            return {...state,
                followingProgress: action.payload.isFetching
                    ? [...state.followingProgress,action.payload.userId]
                    : state.followingProgress.filter(id => id !== action.payload.userId)}
        default:
            return state
    }
}
export const setUsers = (users: User[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const changeFollowStatus = (id: string) => {
    return {
        type: 'CHANGE-FOLLOW-STATUS',
        payload: {
            id
        }
    } as const
}

export const changeCurrentPage = (value: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        payload: {
            value
        } as const
    }
}

export const setTotalUserCount = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            count
        }
    } as const
}

export const changeFetching = () => {
    return {
        type: 'TOGGLE-IS-FETCHING'
    } as const
}

export const toggleFollowProgress = (isFetching:boolean, userId:string) => {
    return {
        type: 'TOGGLE-FOLLOWING',
        payload:{
            isFetching,
            userId
        }
    } as const
}

export const getUsersThunkCreator =(currentPage:number,pageSize:number) =>(dispatch:Dispatch)=>{
    dispatch(changeFetching())
    usersAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(changeFetching())
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
    })
}