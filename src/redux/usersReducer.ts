type UserLocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    fullName: string
    status: string
    followed: boolean
    avatar: string
    location: UserLocationType
}

export type initialStateType = {
    users: UserType[]
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
type allUsersActionType = setUsersType | changeFollowStatusType

const initialState: initialStateType = {
    users: []
}

export const UsersReducer = (state: initialStateType = initialState, action: allUsersActionType): initialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}

        case "CHANGE-FOLLOW-STATUS":
            return {...state, users: state.users.map(el=>el.id===action.payload.id? {...el, followed:!el.followed}:el)}
        default:
            return state
    }
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const changeFollowStatusAC = (id: number) => {
    return {
        type: 'CHANGE-FOLLOW-STATUS',
        payload:{
            id
        }
    } as const
}