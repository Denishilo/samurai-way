import {mainProfileAPI} from "api/mainProfileAPI";
import {setUser} from "./userAuthReducer";
import {AppThunkDispatch} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_AVATAR = 'SET-AVATAR';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MainPageType = {
    posts: PostType[]
    profile: null | ProfileType
    status: string
}

type Socials = 'github' | 'mainLink' | 'youtube' | 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram'

export type ContactsType = Record<Socials, string | null>

export type PhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    "aboutMe"?: null | string;
    "contacts"?: ContactsType;
    "lookingForAJob"?: boolean;
    "lookingForAJobDescription"?: null | string;
    "fullName"?: string;
    "userId"?: string;
    "photos"?: PhotoType;
}

export type actionDispatchType =
    | ReturnType<typeof addNewPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setAvatar>

const initialState: MainPageType = {
    posts: <PostType[]>[
        {id: 1, message: 'Hello my friends', likesCount: 10},
        {id: 2, message: 'How are you? I\'m study in IT-INCUBATOR!', likesCount: 4},
    ],
    profile: null,
    // profile: {
    //     aboutMe:'',
    //     //contacts:{website:''},
    //     lookingForAJob:false,
    //     lookingForAJobDescription:'',
    //     fullName:'',
    //     userId:'',
    //     photos:{small:'',large:''}
    // },
    status: '',

}
export const mainPagePostReducer = (state: MainPageType = initialState, action: actionDispatchType): MainPageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {id: 3, message: action.payload.newPost, likesCount: 0}
            return {...state, posts: [...state.posts, newPost]}

        }
        case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        case SET_USER_STATUS:
            return {...state, status: action.payload.status}
        case SET_AVATAR:
            return {...state, profile:{...state.profile, photos:action.payload.photo}}
        default:
            return state
    }
}

export const addNewPost = (newPost: string) => {
    return {
        type: ADD_POST,
        payload: {
            newPost
        }
    } as const
}

const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        payload: {
            status
        }
    } as const
}
const setAvatar = (photo: PhotoType) => {
    return {
        type: SET_AVATAR,
        payload: {
            photo
        }
    } as const
}

export const mainProfileThunkCreator = (userId: string) => async (dispatch: AppThunkDispatch) => {
    const res = await mainProfileAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getUserStatusTC = (userId: string) => async (dispatch: AppThunkDispatch) => {
    const res = await mainProfileAPI.getStatus(userId)
    dispatch(setUserStatus(res.data))
}

export const updateUserStatusTC = (status: string, userId: string) => async (dispatch: AppThunkDispatch) => {
    const res = await mainProfileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(getUserStatusTC(userId))
    }
}

export const updateAvatarPhoto = (photo: File) => async (dispatch: AppThunkDispatch) => {
    const res = await mainProfileAPI.updateAvatar(photo)
    if (res.data.resultCode === 0) {
        dispatch(setAvatar(res.data.data.photos))
    }
}