export type UserAuthType = {
    data:UserDataType
}

export type UserDataType = {
    id: null | string
    login: null | string
    email: null | string
    isUserAuth: boolean
}

type AllUserAuthActionType = ReturnType<typeof setUser>

const initialState = {
    data:{
        id: null,
        login: null,
        email: null,
        isUserAuth: false
    }
}

export const userAuthReducer = (state: UserAuthType = initialState, action: AllUserAuthActionType): UserAuthType => {
    switch (action.type) {
        case "SET-USER-AUTH":
           return {...state, data:{...action.payload}}

    }
    return state
}

export const setUser = (id: string, login: string, email: string, isUserAuth: boolean) => {
    return {
        type: 'SET-USER-AUTH',
        payload: {
            id,
            login,
            email,
            isUserAuth
        }
    } as const
}