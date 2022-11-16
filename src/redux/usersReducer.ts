type UserLocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    avatar: string
    location: UserLocationType
}

export type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


type setUsersType = {
    type: 'SET-USERS',
    payload: {
        users: UserType[]
    }
}

type changeFollowStatusType = {
    type: 'CHANGE-FOLLOW-STATUS',
    payload: {
        id: number
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
        count:number
    }
}
type ChangeFetchingValueType = {
    type: 'TOGGLE-IS-FETCHING'

}
type allUsersActionType = setUsersType | changeFollowStatusType | ChangeCurrentPageType | SetTotalUserCountType | ChangeFetchingValueType

const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const UsersReducer = (state: initialStateType = initialState, action: allUsersActionType): initialStateType => {
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
            return {...state,totalUsersCount:action.payload.count}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching:!state.isFetching}
        default:
            return state
    }
}
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const changeFollowStatus = (id: number) => {
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

export const changeFetching =()=> {
    return {
        type: 'TOGGLE-IS-FETCHING'
    } as const
}