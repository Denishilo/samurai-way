
type UserLocationType = {
    country:string
    city:string
}

export type UserType = {
    id:number
    fullName:string
    status:string
    followed:boolean
    avatar:string
    location:UserLocationType
}

export type initialStateType = {
    users:UserType[]
}

type followType = {
    type:'FOLLOW'
    payload: {
        id:number
    }
}

type unFollowType = {
    type:'UNFOLLOW',
    payload: {
        id:number
    }
}

type setUsersType = {
    type:'SET-USERS',
    payload: {
        users:UserType[]
    }
}
type allUsersActionType = followType | unFollowType | setUsersType

const initialState: initialStateType = {
    users:[]
}

export const UsersReducer = (state:initialStateType = initialState, action:allUsersActionType):initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el=> el.id=== action.payload.id ? {...el, followed:true}: el)}
        }
        case "UNFOLLOW":
            return {...state, users: state.users.map(el=> el.id=== action.payload.id ? {...el, followed:false}: el)}

        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return  state
            // throw new Error('errorrrrrr')
    }

}

export const followAC = (id:number) => {
    return {
        type:'FOLLOW',
        payload: {
            id
        }
    } as const
}

export const unFollowAC =(id:number)=>{
    return {
        type:'UNFOLLOW',
        payload: {
            id
        }
    } as const
}

export const setUsersAC=(users:UserType[])=>{
    return {
        type:'SET-USERS',
        payload: {
            users
        }
    } as const
}