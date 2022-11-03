type UserLocationType = {
    country:string
    city:string
}

export type UserType = {
    id:number
    fullName:string
    status:string
    followed:boolean
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

type unFollowAC = {
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
type allUsersActionType = followType | unFollowAC | setUsersType


const initialState: initialStateType = {
    users: [
        {id:1,followed:false, fullName: 'Denis', status: 'I am student', location:{country:'Belarus', city:'Minsk'}},
        {id:1,followed:false,fullName: 'Kirill', status: 'I am boy', location:{country:'Belarus', city:'Minsk'}},
        {id:1,followed:true,fullName: 'Arina', status: 'I am girl', location:{country:'Belarus', city:'Minsk'}},
        {id:1,followed:false,fullName: 'Eugeniu', status: 'I am in the USA', location:{country:'USA', city:'New York'}},
        {id:1,followed:true,fullName: 'Ksuysha', status: 'I am photographer', location:{country:'Belarus', city:'Minsk'}},
        {id:1,followed:false,fullName: 'Alexandr', status: 'Be happy', location:{country:'Ukraine', city:'Kiev'}},
    ]
}

export const UsersReducer = (state:initialStateType, action:allUsersActionType):initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el=> el.id=== action.payload.id ? {...el, followed:true}: el)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(el=> el.id=== action.payload.id ? {...el, followed:false}: el)}

        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return  state
    }

}

export const followAC =(id:number)=>{
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